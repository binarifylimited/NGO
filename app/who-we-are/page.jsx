import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Section2 from '@/components/Section2'
import Stats from '@/components/Stats'
import { events } from '@/constants'
import { Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Volunteer = () => {
  return (
    <div>
        <title>Who We Are - Binarify Outreach</title>
        <Navbar />
        <section className="lg:h-[812px] pb-20 lg:pb-[150px] w-full bg-gray-1 text-black">
            <div className="container lg:flex items-end">
                <div className="w-full pt-28 lg:pt-[300px]">
                    <h1 className="text-5xl lg:text-8xl font-bold mb-4 text-primary">All about our organization</h1>
                    <p className="text-xl lg:text-2xl my-4">Use our fundraising tools to create campaigns helping children in poverty.</p>
                </div>
                <div className="w-full flex items-baseline justify-center">
                    <Image src="/images/image3.jpg" className="w-full lg:w-80" width={300} height={300} alt="Image" />
                </div>
            </div>
        </section>

        <section className="lg:flex px-4 sm:container items-center justify-center">
            <div className="w-full mt-[5%] items-center lg:justify-center">
                <div className="w-full lg:w-[80%]">
                    <p className="font-medium text-lg text-gray mb-5">ABOUT US</p>
                    <h1 className="text-3xl lg:text-5xl font-bold mb-10  text-black">Welcome to our charitab non-profit and NGO ogranization!</h1>
                    <p className="font-normal text-xl lg:text-2xl my-10 text-gray">
                    Society is finding it increasingly difficult to cope with growing social problems. Today, millions of people need support. Therefore, charity has become more relevant than ever, helping to cope with life’s difficulties.
                    </p>
                    <p className="font-normal text-xl lg:text-2xl my-10 text-gray">
                    The charitable fund for needy people provides assistance of various kinds: material, psychological, legal.
                    </p>
                   
                </div>
            </div>
            <div className="w-full">
                <div className="w-full lg:flex items-start lg:mb-[154px] lg:mt-[-250px]">
                    <div className="lg:flex items-start">
                        <Image src="/images/image4.webp" className="border-[30px] border-secondary mb-5 w-full lg:ml-[-100px]" width={300} height={300} alt="Image" />
                        <Image src="/images/image5.webp" className="lg:ml-[20px] w-full lg:w-[70%]" width={600} height={600} alt="Image" />
                    </div>
                </div>
                <div className="sm:flex flex-row lg:flex-col w-full sm:text-center sm:justify-between mt-10 lg:mt-[200px]">
                    <div className="flex flex-col lg:flex-row sm:text-center my-10 items-center mb-5 gap-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none"><g clip-path="url(#clip0)"><path d="M6.25 35.887C5.56006 35.887 5 36.447 5 37.137C5 37.8269 5.56006 38.387 6.25 38.387C6.93994 38.387 7.5 37.8269 7.5 37.137C7.5 36.447 6.93994 35.887 6.25 35.887Z" fill="#67BDB0"></path><path d="M57.4523 40.2217L45.6681 44.273C45.7203 43.9829 45.7496 43.687 45.7496 43.3867C45.7496 40.6299 43.5069 38.3867 40.7496 38.3867H32.6548C32.44 38.3867 32.2281 38.3316 32.0411 38.2261L25.4371 34.5117C24.1314 33.7759 22.6475 33.3867 21.146 33.3867H12.2847C11.7691 31.9321 10.3794 30.8872 8.75002 30.8872H1.25C0.559571 30.8872 0 31.4468 0 32.1372V54.6368C0 55.3272 0.559571 55.8868 1.25 55.8868H8.75002C10.3423 55.8868 11.7075 54.8863 12.2495 53.481C13.6646 53.6568 15.3018 54.0752 16.3306 54.6924L22.8677 58.6148C25.3443 60.1011 28.1797 60.8868 31.0684 60.8868C33.3575 60.8868 35.5753 60.4063 37.6607 59.459L60.9913 49.1861C63.5753 48.1377 64.8512 45.0376 63.3741 42.3052C62.2877 40.2945 59.7433 39.3999 57.4523 40.2217ZM10 52.1426C9.99709 52.8291 9.43703 53.3868 8.75002 53.3868H2.5V33.3872H8.75002C9.43898 33.3872 10 33.9478 10 34.6372V52.1426ZM60.0416 46.8741C60.0284 46.8789 60.0153 46.8848 60.0021 46.8902C60.0021 46.8902 36.6368 57.1783 36.6324 57.1802C34.8721 57.981 33.0001 58.3868 31.0684 58.3868C28.6329 58.3868 26.2422 57.7247 24.1543 56.4712L17.6167 52.5489C16.2173 51.7095 14.2134 51.1978 12.5 50.9927V35.8872H21.146C22.2183 35.8872 23.2779 36.1646 24.211 36.6904L30.815 40.4048C31.3746 40.7202 32.0113 40.8872 32.6548 40.8872H40.7496C42.128 40.8872 43.2496 42.0083 43.2496 43.3872C43.2496 44.7608 42.1275 45.8872 40.7496 45.8872H28.0425C27.3521 45.8872 26.7925 46.4468 26.7925 47.1372C26.7925 47.8272 27.3521 48.3868 28.0425 48.3868H40.7496C41.5694 48.3868 42.3765 48.1831 43.0929 47.8013C43.0929 47.8013 58.2858 42.5786 58.2916 42.5767C59.4117 42.1724 60.6783 42.5747 61.1749 43.4937C61.9196 44.8711 61.3038 46.3687 60.0416 46.8741Z" fill="#67BDB0"></path><path d="M36.4056 33.4444C36.641 33.648 36.9325 33.7496 37.2245 33.7496C37.5164 33.7496 37.8084 33.648 38.0433 33.4444C48.2421 24.6055 54.5507 20.1324 54.5507 13.1812C54.5507 7.68214 50.6576 3.125 45.1883 3.125C41.5965 3.125 38.846 5.19532 37.0746 8.30226C35.307 5.20215 32.5594 3.125 28.9622 3.125C24.7752 3.125 21.2747 5.83838 20.0442 10.0371C19.8499 10.6997 20.2298 11.3941 20.8924 11.5884C21.555 11.7827 22.2493 11.4028 22.4432 10.7402C23.3538 7.63282 25.9124 5.625 28.9622 5.625C32.5282 5.625 35.0296 8.79151 35.87 11.7398C36.0199 12.2813 36.513 12.6563 37.0746 12.6563C37.6366 12.6563 38.1292 12.2813 38.2791 11.7398C38.2962 11.6787 40.0326 5.625 45.1883 5.625C49.1005 5.625 52.0507 8.87306 52.0507 13.1812C52.0507 18.7417 46.6151 22.7505 37.2235 30.8482C31.5013 25.9341 26.9559 22.4751 24.3724 19.0913C23.9534 18.5425 23.1693 18.437 22.6204 18.856C22.0716 19.2749 21.9666 20.0591 22.3851 20.6084C25.2972 24.4224 30.2132 28.0767 36.4056 33.4444Z" fill="#67BDB0"></path><path d="M21.125 14.1372C20.4351 14.1372 19.875 14.6973 19.875 15.3872C19.875 16.0771 20.4351 16.6372 21.125 16.6372C21.815 16.6372 22.375 16.0771 22.375 15.3872C22.375 14.6973 21.815 14.1372 21.125 14.1372Z" fill="#67BDB0"></path></g><defs><clipPath id="clip0"><rect width="64" height="64" fill="white"></rect></clipPath></defs></svg>
                        <p className="font-normal text-xl lg:text-2xl text-gray">Social support and protection.</p>
                    </div>
                    <div className="flex flex-col lg:flex-row sm:text-center my-10 items-center mb-5 gap-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="63" viewBox="0 0 64 63" fill="none"><path d="M56.9372 37.5089C56.4123 36.9835 56.0573 36.3214 55.9118 35.5934C54.8571 30.32 54.1051 28.0968 51.8727 21.4967C50.8839 18.5734 47.9582 9.74573 47.9494 9.72376C46.9782 7.23841 44.4274 5.80823 42.0177 6.39856C39.5084 7.01282 37.8888 9.39417 38.2453 11.941L39.1798 19.7653L34.0221 14.6359C33.5329 14.1491 32.7414 14.151 32.2545 14.6408C31.7677 15.13 31.7702 15.921 32.2594 16.4078L39.9655 24.0714C40.3424 24.4459 40.9157 24.5412 41.3942 24.3082C41.8722 24.0753 42.1505 23.5651 42.0876 23.0368C42.0876 23.0368 40.7228 11.6119 40.7213 11.6022C40.5392 10.3278 41.3522 9.13392 42.612 8.82581C43.7809 8.53968 45.0924 9.31898 45.61 10.6032C47.2878 15.7409 48.5172 19.3756 49.5055 22.2975C51.6994 28.7829 52.4381 30.9679 53.4616 36.0832C53.7038 37.2965 54.2951 38.4005 55.1715 39.277L60.8571 44.9474L46.7194 59.0846L41.1418 53.5216C40.1847 52.5651 38.9225 51.9479 37.4904 51.737C36.1632 51.5426 34.8498 51.2589 33.5587 50.8957C33.777 50.8009 33.9958 50.7067 34.2155 50.6125C35.402 50.1046 36.258 49.0382 36.5045 47.7604C36.9738 45.3283 35.1242 43.1071 32.6833 43.1071H29.7331L38.1959 34.6725C39.6618 33.2077 39.6613 30.8356 38.1964 29.3703C37.8512 29.025 37.4547 28.7628 37.0314 28.5807C37.8493 27.1496 37.6486 25.2902 36.4284 24.07C35.2077 22.8493 33.3488 22.6491 31.9176 23.4669C31.7355 23.0436 31.4728 22.6466 31.1276 22.3019C29.6627 20.8366 27.2907 20.8366 25.8253 22.3019L24.7892 23.338C24.6115 22.9625 24.3678 22.611 24.0587 22.3019C22.8864 21.1295 21.1588 20.9113 19.7863 21.5714C19.6676 21.4538 21.2443 23.0172 6.63685 8.53089C5.66273 7.55579 5.66224 5.96985 6.63636 4.99573C7.6139 4.01819 9.19398 4.01819 10.171 4.99573C25.5255 20.2233 23.9494 18.6598 24.0636 18.7731C24.5543 19.2584 25.3454 19.254 25.8307 18.7633C26.3161 18.2726 26.3117 17.4816 25.8209 16.9962L15.4723 6.76233C14.4962 5.78675 14.4957 4.20471 15.4723 3.22864C16.4415 2.2594 18.0211 2.24329 19.0094 3.23157L25.172 9.35999C25.6613 9.84632 26.4523 9.84437 26.9391 9.35511C27.4259 8.86536 27.4235 8.07435 26.9342 7.58753L20.7741 1.46155C18.8248 -0.487183 15.6539 -0.487183 13.7052 1.46155C13.0748 2.09241 12.6349 2.86194 12.4113 3.7013L11.9386 3.22864C9.98451 1.27454 6.82386 1.27454 4.86976 3.22864C2.92151 5.1764 2.92151 8.3473 4.86976 10.2975L5.34681 10.7745C4.52308 10.9928 3.74476 11.422 3.10218 12.0646C1.1554 14.0133 1.1554 17.1842 3.10755 19.1383L3.57874 19.6041C2.73792 19.8273 1.96692 20.2682 1.33557 20.9C-0.613158 22.8488 -0.613158 26.0202 1.34339 27.9762L7.79261 34.3205C6.63245 36.5622 6.02161 39.0543 6.02161 41.589C6.02161 41.9225 5.89173 42.236 5.6554 42.4723L0.263796 47.8654C-0.224486 48.3532 -0.223998 49.1442 0.263796 49.6325L10.8663 60.235C11.3546 60.7228 12.1452 60.7228 12.6334 60.235L18.0265 54.8429C18.2628 54.6071 18.5763 54.4767 18.9098 54.4767C23.7716 54.4767 27.1505 53.4831 30.0416 52.3639C32.3273 53.2326 34.7082 53.8551 37.1276 54.2096C38.0236 54.3415 38.8004 54.715 39.3761 55.2902L45.8385 61.7355C46.0827 61.9787 46.402 62.1003 46.7213 62.1003C47.0412 62.1003 47.3605 61.9782 47.6046 61.7345L63.509 45.8297C63.7438 45.5954 63.8752 45.277 63.8752 44.9455C63.8747 44.6139 63.7428 44.2961 63.508 44.0617L56.9372 37.5089ZM4.86927 13.8312C5.83558 12.8654 7.41273 12.858 8.38636 13.8146C9.76038 15.173 16.4894 21.8258 17.8693 23.1901L14.3346 26.7248L4.86976 17.3663C3.89612 16.3917 3.89612 14.8053 4.86927 13.8312ZM3.10315 22.6662C4.33411 21.4342 5.39368 21.8981 6.84485 22.8336L12.5675 28.4918L10.6535 30.4064C10.1095 30.9499 9.60755 31.5338 9.14954 32.1496L3.10266 26.2018C2.12805 25.2272 2.12805 23.6413 3.10315 22.6662ZM16.2589 53.0758L11.7492 57.5841L2.9137 48.7487L7.42249 44.2394C8.1305 43.5309 8.52064 42.59 8.52064 41.5885C8.52064 39.1759 9.1764 36.8073 10.4181 34.7389C10.9772 33.8063 11.651 32.943 12.4205 32.1735L20.525 24.069C21.0128 23.5812 21.8024 23.5797 22.2916 24.069C22.7731 24.5499 22.778 25.3375 22.3034 25.8239C22.2965 25.8312 22.2892 25.8385 22.2824 25.8463L16.9899 31.1374C16.5021 31.6251 16.5021 32.4166 16.9899 32.9044C17.4777 33.3922 18.2687 33.3927 18.757 32.9049C19.5475 32.1139 25.5177 26.1437 27.5929 24.069C28.0802 23.5817 28.8712 23.5797 29.3605 24.069C29.8478 24.5563 29.8478 25.3493 29.3605 25.8366L20.525 34.6725C20.0368 35.1603 20.0368 35.9513 20.525 36.4396C21.0133 36.9274 21.8039 36.9274 22.2921 36.4396C23.5797 35.152 32.131 26.6007 32.8947 25.8371C33.382 25.3498 34.1745 25.3502 34.6613 25.8371C35.1481 26.3239 35.1481 27.1164 34.6613 27.6037C33.4718 28.7931 25.1828 37.0822 24.0587 38.2062C23.5709 38.694 23.5709 39.4855 24.0587 39.9733C24.5465 40.4611 25.3375 40.4611 25.8258 39.9733L34.6603 31.1388C34.6608 31.1383 34.6613 31.1383 34.6618 31.1378C35.1491 30.6515 35.942 30.6505 36.4293 31.1378C36.9206 31.6291 36.9142 32.4206 36.4308 32.904L25.8273 43.4718C25.4689 43.8288 25.3615 44.3664 25.5543 44.8341C25.7477 45.3014 26.2033 45.6061 26.7091 45.6061H32.6833C33.5294 45.6061 34.2282 46.3693 34.0509 47.2868C33.88 48.173 33.216 48.321 32.3507 48.695C31.3991 49.1061 30.5006 49.4948 29.5724 49.8634C26.8107 50.9616 23.6076 51.9777 18.9098 51.9777C17.9083 51.9777 16.9669 52.3678 16.2589 53.0758Z" fill="#67BDB0"></path></svg>
                        <p className="font-normal text-xl lg:text-2xl text-gray">Legal advice on important issues</p>
                    </div>
                </div>
            </div>
            
        </section>

        <Stats />

        <Section2 />

        <section className="py-10 lg:py-[100px]">
            <div className="mx-auto flex flex-col text-center items-center justify-center w-fit">
                <p className="font-medium text-lg text-gray uppercase mb-5">Meet our Team</p>
                <h1 className="text-3xl lg:text-5xl font-bold mb-11 text-black">Do it for humanity. Join us.</h1>
                <div className="lg:flex justify-between mx-auto container items-start gap-10 lg:gap-14">
                { [{id: 1},{id: 2},{id: 3},{id: 4},].map((event) => {
                    return (
                        <div key={event.id} className="text-left">
                            <Image src="/images/staff1.jpg" className="w-full mb-6" width={300} height={300} alt="Image" />
                            <h2 className="text-2xl font-bold text-black mb-[17px]">Aliyu</h2>
                            <h2 className="text-lg mt-3 font-bold text-primary">Co-Founder</h2>
                            <p className="font-normal text-2xl my-5 lg:my-10 text-gray">Assistance to orphans and children with disabilities.</p>
                        </div>
                    )
                }) }
            </div>
            </div>
        </section>

        <section className="h-fit lg:h-[812px] lg:pb-[151px] w-full bg-[url('/images/boybg.webp')] mb-[-30px] bg-no-repeat bg-center bg-cover text-slate-50">
            <div className="container flex items-center">
                <div className="lg:max-w-[65%] py-[70px] lg:py-[150px]">
                    <h1 className="text-4xl lg:text-8xl font-bold mb-4">Running Social Value Programs</h1>
                    <p className="text-2xl my-4">Create maximum opportunities for yourself to realize their goals.</p>
                    <div className="mt-16 lg:my-16">
                        <Link href="/who-we-are" type="button" className="bg-secondary text-lg font-semibold text-[#222] rounded-full hover:bg-primary w-full py-5 px-10">
                            Volunteer Now
                        </Link>
                    </div>
                </div>
            </div>
            
        </section>

        <Footer />
    </div>
  )
}

export default Volunteer