<?php

namespace App\Http\Requests\Client;

use Illuminate\Foundation\Http\FormRequest;

class ChangePasswordRequest extends FormRequest
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
            'oldPassword' => 'required|min:6|max:25',
            'newPassword' => 'required|min:6|max:25',
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
            'oldPassword.required' => trans('client.validations.changePassword.oldPassword'),
            'oldPassword.min' => trans('client.validations.changePassword.oldPassword'),
            'oldPassword.max' => trans('client.validations.changePassword.oldPassword'),
            'newPassword.required' => trans('client.validations.changePassword.newPassword_required'),
            'newPassword.min' => trans('client.validations.changePassword.newPassword_min', ['min' => 6]),
            'newPassword.max' => trans('client.validations.changePassword.newPassword_max', ['max' => 25]),
        ];
    }
}
