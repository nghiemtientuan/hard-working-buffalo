<?php

namespace App\Http\Requests\Client;

use Illuminate\Foundation\Http\FormRequest;

class SignInRequest extends FormRequest
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
        return [
            'email' => 'required|email|min:6|max:25|unique:students,email',
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
            'email.required' => trans('client.validations.signin.email_require'),
            'email.email' => trans('client.validations.signin.email_email'),
            'email.min' => trans('client.validations.signin.email_min'),
            'email.max' => trans('client.validations.signin.email_max'),
            'email.unique' => trans('client.validations.signin.email_unique'),
            'password.required' => trans('client.validations.signin.password_required'),
            'password.min' => trans('client.validations.signin.password_min'),
            'password.max' => trans('client.validations.signin.password_max'),
        ];
    }
}
