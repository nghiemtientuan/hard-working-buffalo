<?php

namespace App\Http\Requests\Client;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        session()->flash('email', $this->email);

        return [
            'email' => 'required|email|min:6|max:25',
            'password' => 'required|min:6|max:25',
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'email.required' => trans('client.actions.login_false'),
            'email.email' => trans('client.actions.login_false'),
            'email.min' => trans('client.actions.login_false'),
            'email.max' => trans('client.actions.login_false'),
            'password.required' => trans('client.actions.login_false'),
            'password.min' => trans('client.actions.login_false'),
            'password.max' => trans('client.actions.login_false'),
        ];
    }
}
