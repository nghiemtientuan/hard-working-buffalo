<?php

namespace App\Http\Requests\Client;

use Illuminate\Foundation\Http\FormRequest;

class UpdateStudentProfileRequest extends FormRequest
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
            'username' => 'required|min:1|max:25',
            'firstname' => 'required|min:1|max:25',
            'lastname' => 'required|min:1|max:25',
            'birthday' => 'required',
            'address' => 'required|min:1|max:50',
            'phone' => 'required|min:10|max:10',
            'description' => 'required|min:1|max:200',
            'file_id' => 'required|numeric|min:1|max:46',
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
            'username.required' => trans('client.validations.editProfile.username_require'),
            'username.min' => trans('client.validations.editProfile.username_min', ['min' => 1]),
            'username.max' => trans('client.validations.editProfile.username_max', ['max' => 25]),
            'firstname.required' => trans('client.validations.editProfile.firstname_require'),
            'firstname.min' => trans('client.validations.editProfile.firstname_min', ['min' => 1]),
            'firstname.max' => trans('client.validations.editProfile.firstname_nax', ['max' => 25]),
            'lastname.required' => trans('client.validations.editProfile.lastname_require'),
            'lastname.min' => trans('client.validations.editProfile.lastname_min', ['min' => 1]),
            'lastname.max' => trans('client.validations.editProfile.lastname_max', ['max' => 25]),
            'birthday.required' => trans('client.validations.editProfile.birthday_require'),
            'address.required' => trans('client.validations.editProfile.address_require'),
            'address.min' => trans('client.validations.editProfile.address_min', ['min' => 1]),
            'address.max' => trans('client.validations.editProfile.address_max', ['max' => 50]),
            'phone.required' => trans('client.validations.editProfile.phone_require'),
            'phone.min' => trans('client.validations.editProfile.phone_wrong_format'),
            'phone.max' => trans('client.validations.editProfile.phone_wrong_format'),
            'description.required' => trans('client.validations.editProfile.description_require'),
            'description.min' => trans('client.validations.editProfile.description_min', ['min' => 1]),
            'description.max' => trans('client.validations.editProfile.description_max', ['max' => 200]),
            'file_id.required' => trans('client.validations.editProfile.file_error'),
            'file_id.numeric' => trans('client.validations.editProfile.file_error'),
            'file_id.min' => trans('client.validations.editProfile.file_error'),
            'file_id.max' => trans('client.validations.editProfile.file_error'),
        ];
    }
}
