export default function FooterForm(props) {
    return (
        <>
            <form action="#" method="POST" className="">
                            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                    <div>
                                        <label for="first-name" className="block text-sm font-semibold leading-6 text-white font-quicksand">First name</label>
                                        <div className="mt-2.5">
                                            <input type="text" name="first-name" id="first-name" autocomplete="given-name" className="font-quicksand block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <label for="last-name" className="block text-sm font-semibold leading-6 text-white font-quicksand">Last name</label>
                                        <div className="mt-2.5">
                                            <input type="text" name="last-name" id="last-name" autocomplete="family-name" className="font-quicksand block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label for="email" className="block text-sm font-semibold leading-6 text-white font-quicksand">Email</label>
                                        <div className="mt-2.5">
                                            <input type="email" name="email" id="email" autocomplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label for="phone-number" className="block text-sm font-semibold leading-6 text-white font-quicksand">Phone number</label>
                                        <div className="mt-2.5">
                                            <input type="tel" name="phone-number" id="phone-number" autocomplete="tel" className="font-quicksand block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label for="message" className="block text-sm font-semibold leading-6 text-white font-quicksand">Message</label>
                                        <div className="mt-2.5">
                                            <textarea name="message" id="message" rows="4" className="block w-full font-quicksand rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 flex justify-end">
                                    <button type="submit" className="rounded-md bg-orange-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm font-quicksand">Send message</button>
                                </div>
                            </div>
            </form>
        </>
    );
}
 