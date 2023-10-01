import React from 'react';

function FormRepair(props) {
    return (
        <div>
            <form action="#" method="POST" class="">
                    <div class="mx-auto w-8/12 py-20">
                        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label for="first-name" class="block text-base font-bold leading-6 text-[#15182f] font-quicksand">First name</label>
                                <div class="mt-2.5">
                                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="font-quicksand block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div>
                                <label for="first-name" class="block text-base font-bold leading-6 text-[#15182f] font-quicksand">Last name</label>
                                <div class="mt-2.5">
                                    <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="font-quicksand block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div class="sm:col-span-2">
                                <label for="first-name" class="block text-base font-bold leading-6 text-[#15182f] font-quicksand">Email</label>
                                <div class="mt-2.5">
                                    <input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div class="sm:col-span-2">
                                <label for="first-name" class="block text-base font-bold leading-6 text-[#15182f] font-quicksand">Phone number</label>
                                <div class="mt-2.5">
                                    <input type="tel" name="phone-number" id="phone-number" autocomplete="tel" class="font-quicksand block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div> 
                            <div class="sm:col-span-2">
                                <label for="first-name" class="block text-base font-bold leading-6 text-[#15182f] font-quicksand">Drop Off Date</label>
                                <div class="mt-2.5">
                                    <input type="date" name="date" id="Drop_Off_Date" class="font-quicksand block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div class="sm:col-span-2">
                                <label for="first-name" class="block text-base font-bold leading-6 text-[#15182f] font-quicksand">Bike Problem</label>
                                <div class="mt-2.5">
                                    <textarea name="message" id="message" rows="4" class="block w-full font-quicksand rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="mt-8 flex justify-end">
                            <button type="submit" class="rounded-md bg-orange-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm font-quicksand">Send message</button>
                        </div>
                    </div>
                </form>
        </div>
    );
}

export default FormRepair;