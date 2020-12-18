import React from 'react'
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form'
import TextInput from './elements/TextInput';
import SelectElement from './elements/SelectElement';
import { getCityData } from '../redux/async-thunks';

const Search = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data: { city: string, units?: string }) => {
    dispatch(getCityData(data))
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <label htmlFor="city" className="text-sm">
              City <span className="text-gray-600">(required)</span>
            </label>
            <TextInput
              id="city"
              name="city"
              className="text-sm"
              placeholder="Enter a city name"
              ref={register({ required: true })}
            />
            {errors.city && <p className="text-sm mt-1 text-red-600">This input is required.</p>}
          </div>

          <div className="pl-2">
            <label htmlFor="units" className="text-sm">Units</label>
            <SelectElement id="units" name="units" className="text-sm" ref={register}>
              <option value="">Select unit</option>
              <option value="metric">Metric</option>
              <option value="imperial">Imperial</option>
              <option value="kelvin">Kelvin</option>
            </SelectElement>
          </div>

          <div className="pt-6 pl-2">
            <button type="submit" className="px-2 py-2 bg-blue-700 text-gray-100 text w-full mt-1 rounded text-sm">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
