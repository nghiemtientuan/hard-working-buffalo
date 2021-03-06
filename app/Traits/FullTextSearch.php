<?php

namespace App\Traits;

trait FullTextSearch
{
    /**
     * Replaces spaces with full text search wildcards
     *
     * @param string $term
     * @return string
     */
    protected function fullTextWildcards($term)
    {
        // removing symbols used by MySQL
        $reservedSymbols = ['+', '<', '>', '@', '(', ')', '~'];
        $term = str_replace($reservedSymbols, ' ', $term);

        $words = explode(' ', $term);

        foreach ($words as $key => $word) {
            /*
             * applying + operator (required word) only big words
             * because smaller ones are not indexed by mysql
             */
            if (strlen($word) >= config('constant.fulltext.min_strlen_word_search')) {
                $words[$key] = '+' . $word . '*';
            }
        }

        return implode(' ', $words);
    }

    /**
     * Scope a query that matches a full text search of term.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param string $term
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeSearch($query, $term)
    {
        if (strlen($term) >= config('constant.fulltext.min_strlen_word_search')) {
            $columns = implode(',', $this->searchable);
            $query->whereRaw("MATCH ({$columns}) AGAINST (? IN BOOLEAN MODE)", $this->fullTextWildcards($term));

            return $query;
        } else {
            return $this->searchLike($query, $term);
        }
    }

    public function searchLike($query, $keyword)
    {
        foreach ($this->searchable as $column) {
            $query->where($column, 'LIKE', '%' . $keyword . '%');
        }

        return $query;
    }
}
