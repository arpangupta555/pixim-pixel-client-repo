import React from 'react';

const AddService = () => {
    return (
        <div>
            <form >
                <div className="grid grid-cols-1 mx-auto p-10 ">
                    <h1 className='text-4xl my-5'>Add Your Services</h1>
                    <input name='email' type="text" placeholder="Service Name" className="input input-bordered w-full max-w-xs mb-3" readOnly />
                    <input name='duration' type="text" placeholder="Service duration" className="input input-bordered w-full max-w-xs mb-3" />
                    <input name='price' type="text" placeholder="Service Price" className="input input-bordered w-full max-w-xs mb-3" />
                    <textarea name='description' className="textarea textarea-bordered h-24 w-full" placeholder="Service Description"></textarea>
                    <fieldset className="w-full space-y-1 dark:text-white-100">
                        <label for="files" className="block text-sm font-medium">Upload Picture</label>
                        <div className="flex">
                            <input type="file" name="files" id="files" className="px-8 py-12 border-2 border-dashed rounded-md dark:border-white-700 dark:text-gray-400 dark:bg-gray-300" />
                        </div>
                    </fieldset>
                </div>
                <input className='btn my-3 mx-10' type="submit" value="Place Your Service" />

            </form>
        </div>
    );
};

export default AddService;