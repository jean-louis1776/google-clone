import { GlobeIcon } from "@heroicons/react/solid"

const Footer = (props) => {
    return (
        <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">
            <div className="px-8 py-3">
                <p>Russian Federation</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 px-8 py-3 grid-flow-row-dense">
                <div className="link flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2">
                    <GlobeIcon className="h-5 mr-1 text-green-700" />
                    <a
                        href="https://sustainability.google/intl/ru/carbon-free/?utm_source=googlehpfooter&utm_medium=housepromos&utm_campaign=bottom-footer&utm_content=#home"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Carbon neutral since 2007
                    </a>
                </div>
                <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
                    <p className="link">
                        <a
                            href="https://www.google.com/intl/ru_ru/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Advertising
                        </a>
                    </p>
                    <p className="link">
                        <a
                            href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1#?modal_active=none"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Business
                        </a>
                    </p>
                    <p className="link">
                        <a
                            href="https://www.google.com/search/howsearchworks/?fg=1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            How Search works
                        </a>
                    </p>
                </div>
                <div className="flex justify-center space-x-8 md:ml-auto">
                    <p className="link">
                        <a
                            href="https://policies.google.com/privacy?hl=ru&fg=1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Privacy
                        </a>
                    </p>
                    <p className="link">
                        <a
                            href="https://policies.google.com/terms?hl=ru&fg=1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Terms
                        </a>
                    </p>
                    <p className="link">Settings</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
