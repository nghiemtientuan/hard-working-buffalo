<?php

namespace App\Console\Commands;

use App\Jobs\SendMailShowAnswer;
use App\Models\Test;
use Illuminate\Console\Command;
use App\Repositories\Contracts\TestRepositoryInterface as TestRepository;
use App\Repositories\Contracts\HistoryRepositoryInterface as HistoryRepository;

class ShowAnswerTest extends Command
{
    protected $testRepository;
    protected $historyRepository;

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'test:show-answer-test';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Show answer test';

    /**
     * Create a new command instance.
     *
     * @param TestRepository $testRepository
     * @param HistoryRepository $historyRepository
     */
    public function __construct(
        TestRepository $testRepository,
        HistoryRepository $historyRepository
    ) {
        parent::__construct();
        $this->testRepository = $testRepository;
        $this->historyRepository = $historyRepository;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $allTests = $this->testRepository->getTestNotShowAnswer();
        $nowDate = date(Test::DATE_TIME_FORMAT);
        foreach ($allTests as $test) {
            $dateTest = date(Test::DATE_TIME_FORMAT, strtotime($test->day_show_answer));
            if (!$test->day_show_answer || $nowDate == $dateTest) {
                $this->testRepository->update(
                    $test->id,
                    [
                        Test::IS_SHOW_ANSWER_FIELD => Test::IS_FORMULA_SCORE_TRUE,
                    ]
                );

                $students = $this->historyRepository->getStudentTested($test->id);
                foreach ($students as $student) {
                    $histories = $this->historyRepository->getHistoriesByTestUser($test->id, $student->id);

                    dispatch(new SendMailShowAnswer($student, $test, $histories));
                }

                $this->info('Show test and send mail (id: ' . $test->id . ', name: ' . $test->name . ')');
            }
        }
    }
}
