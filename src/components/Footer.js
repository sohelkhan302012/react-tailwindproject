const Footer = () =>{
    return(
        <footer class="pt-[50px] md:pt-20 lg:pt-[100px] bg-[#1C1E53]">
      <div class="wrapper">
        <div class="flex flex-wrap -mx-4 justify-between gap-y-4">
          <div class="xl:w-6/12 lg:w-6/12 md:w-6/12 sm:w-full w-full px-4">
            <a href="#" class="inline-block pb-6"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="160"
                height="33"
                viewBox="0 0 160 33"
                fill="none"
              >
                <g clip-path="url(#clip0_2894_588)">
                  <path
                    d="M159.716 24.7494V28.7089H156.395C152.85 28.5975 150.957 26.6836 150.957 23.0887V14.0456H148.638V10.5722H150.957V6.68359H155.858V10.5317H159.605V13.995H155.858V22.6026C155.858 23.7671 156.091 24.6988 157.883 24.6988L159.716 24.7494Z"
                    fill="white"
                  />
                  <path
                    d="M129.104 19.6762V19.4129C129.051 18.2482 129.228 17.0845 129.626 15.9885C130.023 14.8925 130.633 13.8857 131.421 13.0258C132.208 12.166 133.158 11.47 134.214 10.9777C135.271 10.4855 136.415 10.2067 137.58 10.1572C137.813 10.1572 138.056 10.1572 138.289 10.1572C142.917 10.1572 146.977 12.8509 146.977 19.2711V20.6382H134.117C134.248 23.5952 135.848 25.2661 138.542 25.2661C140.861 25.2661 141.944 24.2534 142.258 22.7749H146.886C146.319 26.6332 143.241 28.78 138.37 28.78C133.023 28.7395 129.104 25.3572 129.104 19.6762ZM142.157 17.5395C141.985 14.8458 140.628 13.5496 138.268 13.5496C135.909 13.5496 134.552 15.0079 134.218 17.5395H142.157Z"
                    fill="white"
                  />
                  <path
                    d="M109.093 19.6762V19.4129C109.04 18.2499 109.217 17.0877 109.613 15.993C110.009 14.8982 110.618 13.8923 111.403 13.0327C112.188 12.1732 113.135 11.4768 114.19 10.9834C115.244 10.49 116.386 10.2092 117.549 10.1572C117.782 10.1572 118.025 10.1572 118.258 10.1572C122.886 10.1572 126.956 12.8509 126.956 19.2711V20.6382H114.106C114.237 23.5952 115.837 25.2661 118.531 25.2661C120.85 25.2661 121.934 24.2534 122.248 22.7749H126.875C126.298 26.6332 123.22 28.78 118.349 28.78C113.012 28.7395 109.093 25.3572 109.093 19.6762ZM122.146 17.5395C121.974 14.8458 120.617 13.5496 118.258 13.5496C115.898 13.5496 114.582 15.0484 114.207 17.5294L122.146 17.5395Z"
                    fill="white"
                  />
                  <path
                    d="M81.0127 10.5312H86.1975L89.3671 22.5414L92.8405 10.5312H96.8912L100.03 22.5414L103.372 10.5312H108.122L102.491 28.3743H97.6304L94.5924 17.1743L91.3418 28.3743H86.4203L81.0127 10.5312Z"
                    fill="white"
                  />
                  <path
                    d="M64.5371 22.7643H69.165C69.3776 24.3744 70.1776 25.296 72.3042 25.296C74.208 25.296 75.089 24.577 75.089 23.3517C75.089 22.1263 74.0764 21.6099 71.484 21.2453C66.7346 20.5263 64.9017 19.1592 64.9017 15.6757C64.9017 11.9592 68.3042 10.1162 71.9903 10.1162C75.9498 10.1162 78.9371 11.5542 79.3624 15.6555H74.7953C74.7662 15.3384 74.6745 15.0302 74.5256 14.7488C74.3767 14.4674 74.1735 14.2183 73.9277 14.0158C73.682 13.8134 73.3985 13.6617 73.0938 13.5694C72.7891 13.4771 72.4691 13.4461 72.1523 13.4782H72.0004C70.4004 13.4782 69.4688 14.2276 69.4688 15.3213C69.4688 16.4149 70.3295 16.8909 72.9422 17.2656C77.3776 17.9339 79.8586 19.058 79.8586 22.8757C79.8586 26.6934 77.0536 28.739 72.3548 28.739C67.6561 28.739 64.6688 26.6225 64.5371 22.7643Z"
                    fill="white"
                  />
                  <path
                    d="M44.8711 10.5316H49.7724V13.3569C50.3248 12.3199 51.1633 11.4633 52.1884 10.8888C53.2134 10.3144 54.3817 10.0463 55.5546 10.1164C59.0281 10.1164 61.5496 12.2329 61.5496 17.0632V28.4151H56.7091V17.7721C56.7091 15.3518 55.7673 14.1974 53.58 14.1974C53.1176 14.1572 52.6519 14.2086 52.2095 14.3488C51.7672 14.489 51.3568 14.7152 51.0021 15.0145C50.6474 15.3137 50.3553 15.68 50.1425 16.0924C49.9297 16.5048 49.8005 16.9552 49.7622 17.4177C49.7369 17.633 49.7369 17.8505 49.7622 18.0658V28.3746H44.8711V10.5316Z"
                    fill="white"
                  />
                  <path
                    d="M35.4128 6.046C35.395 5.55732 35.5226 5.07436 35.7795 4.65827C36.0364 4.24217 36.4109 3.91165 36.8558 3.70855C37.3006 3.50545 37.7957 3.43891 38.2783 3.51735C38.761 3.59578 39.2096 3.81567 39.5672 4.14917C39.9248 4.48267 40.1754 4.91479 40.2873 5.39081C40.3992 5.86683 40.3674 6.36535 40.1958 6.82326C40.0242 7.28116 39.7206 7.67786 39.3234 7.96312C38.9263 8.24839 38.4534 8.40939 37.9647 8.42574H37.8735C37.5702 8.44494 37.2661 8.40406 36.9786 8.30545C36.6911 8.20684 36.4259 8.05243 36.1982 7.85109C35.9705 7.64976 35.7848 7.40544 35.6518 7.13217C35.5187 6.8589 35.4409 6.56205 35.4229 6.25865C35.4145 6.1881 35.4111 6.11703 35.4128 6.046ZM35.4128 10.5321H40.3647V28.3751H35.433L35.4128 10.5321Z"
                    fill="white"
                  />
                  <path
                    d="M16.749 3.99023H32.4047V8.31428H22.2781V14.7649H30.2984V18.9269H22.268V28.375H16.749V3.99023Z"
                    fill="white"
                  />
                  <path
                    d="M7.30127 11.9696C7.30127 13.4987 7.30127 15.362 5.19494 16.1215C7.3519 16.8608 7.30127 18.4304 7.30127 20.0709V26.1468C7.30127 27.3013 7.76709 28 8.59747 28.1722C8.77993 28.2337 8.97216 28.2612 9.16456 28.2532H11.1899V32.3038H7.8481C4.28355 32.3038 2.31899 30.2785 2.31899 26.5215V19.3316C2.29371 18.9625 2.13095 18.6163 1.86286 18.3613C1.59476 18.1064 1.24081 17.9612 0.870886 17.9544H0V14.4H0.870886C1.24819 14.395 1.60909 14.245 1.87872 13.981C2.14835 13.717 2.30601 13.3594 2.31899 12.9823V5.69114C2.31899 1.99494 4.24304 0 7.8481 0H11.2203V3.98987H9.19494C9.00231 3.99043 8.81095 4.02118 8.62785 4.08101C7.79747 4.29367 7.33165 4.98228 7.33165 6.10633L7.30127 11.9696Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2894_588">
                    <rect width="160" height="32.4051" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <p class="font-semibold text-base text-[#FFFFFFcc] mb-2 leading-8">
              We are always open to discuss your project and improve your online
              presence.
            </p>
            <div
              class="flex bg-[#FCD980] pt-[18px] pb-4 px-[37px] gap-x-[29px] mt-[86px] flex-wrap"
            >
              <div>
                <p class="text-[#282938] text-lg font-medium">Email me at</p>
                <p class="text-[#282938] text-base font-normal opacity-80">
                  contact@website.com
                </p>
              </div>
              <div>
                <p class="text-[#282938] text-lg font-medium">Call us</p>
                <p class="text-[#282938] text-base font-normal opacity-80">
                  0927 6277 28525
                </p>
              </div>
            </div>
          </div>
          <div class="xl:w-5/12 lg:w-5/12 md:w-5/12 sm:w-full w-full px-4">
            <h2 class="pb-3.5 font-semibold text-[32px] lg:text-5xl text-white">
              Lets Talk!
            </h2>
            <p class="text-base font-normal text-[#F4F6FCcc]">
              We are always open to discuss your project, improve your online
              presence and help with your UX/UI design challenges.
            </p>
            <ul class="flex gap-x-[26px] pt-7 mb-3 md:mb-0">
              <li>
                <a href="#"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_2894_557)">
                      <path
                        d="M16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 11.993 2.92547 15.3027 6.75 15.9028V10.3125H4.71875V8H6.75V6.2375C6.75 4.2325 7.94438 3.125 9.77172 3.125C10.6467 3.125 11.5625 3.28125 11.5625 3.28125V5.25H10.5538C9.56 5.25 9.25 5.86672 9.25 6.5V8H11.4688L11.1141 10.3125H9.25V15.9028C13.0745 15.3027 16 11.993 16 8Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2894_557">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_2894_559)">
                      <path
                        d="M5.69945 14.5005C11.7357 14.5005 15.0382 9.49829 15.0382 5.16173C15.0382 5.0211 15.0351 4.87735 15.0288 4.73673C15.6713 4.27213 16.2257 3.69666 16.666 3.03735C16.0677 3.30356 15.4324 3.47741 14.782 3.55298C15.4669 3.14243 15.9797 2.49747 16.2254 1.73767C15.5811 2.11953 14.8764 2.3889 14.1416 2.53423C13.6466 2.0082 12.992 1.6599 12.2791 1.54319C11.5663 1.42648 10.8348 1.54786 10.1978 1.88855C9.56088 2.22925 9.05388 2.77029 8.75525 3.42803C8.45661 4.08577 8.38297 4.82357 8.5457 5.52735C7.24101 5.46188 5.96464 5.12296 4.79934 4.53255C3.63403 3.94215 2.60581 3.11345 1.78133 2.10017C1.36228 2.82265 1.23405 3.67759 1.4227 4.49122C1.61135 5.30485 2.10272 6.01612 2.79695 6.48048C2.27577 6.46393 1.766 6.32361 1.30977 6.0711V6.11173C1.3093 6.86992 1.57141 7.60488 2.05156 8.19167C2.5317 8.77846 3.20023 9.18086 3.94352 9.33048C3.46072 9.46257 2.954 9.48182 2.46258 9.38673C2.67232 10.0388 3.0804 10.6091 3.62986 11.018C4.17933 11.427 4.84276 11.6542 5.52758 11.668C4.36497 12.5812 2.9288 13.0766 1.45039 13.0742C1.18821 13.0738 0.926282 13.0578 0.666016 13.0261C2.16792 13.9897 3.91504 14.5014 5.69945 14.5005Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2894_559">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0.666016)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_2894_561)">
                      <path
                        d="M8.33399 1.44062C10.4715 1.44062 10.7246 1.45 11.5652 1.4875C12.3465 1.52187 12.7684 1.65313 13.0496 1.7625C13.4215 1.90625 13.6902 2.08125 13.9684 2.35938C14.2496 2.64062 14.4215 2.90625 14.5652 3.27813C14.6746 3.55938 14.8059 3.98438 14.8402 4.7625C14.8777 5.60625 14.8871 5.85938 14.8871 7.99375C14.8871 10.1313 14.8777 10.3844 14.8402 11.225C14.8059 12.0063 14.6746 12.4281 14.5652 12.7094C14.4215 13.0813 14.2465 13.35 13.9684 13.6281C13.6871 13.9094 13.4215 14.0813 13.0496 14.225C12.7684 14.3344 12.3434 14.4656 11.5652 14.5C10.7215 14.5375 10.4684 14.5469 8.33399 14.5469C6.19649 14.5469 5.94336 14.5375 5.10274 14.5C4.32148 14.4656 3.89961 14.3344 3.61836 14.225C3.24648 14.0813 2.97773 13.9063 2.69961 13.6281C2.41836 13.3469 2.24648 13.0813 2.10273 12.7094C1.99336 12.4281 1.86211 12.0031 1.82773 11.225C1.79023 10.3813 1.78086 10.1281 1.78086 7.99375C1.78086 5.85625 1.79023 5.60313 1.82773 4.7625C1.86211 3.98125 1.99336 3.55938 2.10273 3.27813C2.24648 2.90625 2.42148 2.6375 2.69961 2.35938C2.98086 2.07812 3.24648 1.90625 3.61836 1.7625C3.89961 1.65313 4.32461 1.52187 5.10274 1.4875C5.94336 1.45 6.19649 1.44062 8.33399 1.44062ZM8.33399 0C6.16211 0 5.89023 0.009375 5.03711 0.046875C4.18711 0.084375 3.60273 0.221875 3.09648 0.41875C2.56836 0.625 2.12148 0.896875 1.67773 1.34375C1.23086 1.7875 0.958984 2.23438 0.752734 2.75938C0.555859 3.26875 0.418359 3.85 0.380859 4.7C0.343359 5.55625 0.333984 5.82812 0.333984 8C0.333984 10.1719 0.343359 10.4438 0.380859 11.2969C0.418359 12.1469 0.555859 12.7313 0.752734 13.2375C0.958984 13.7656 1.23086 14.2125 1.67773 14.6562C2.12148 15.1 2.56836 15.375 3.09336 15.5781C3.60273 15.775 4.18398 15.9125 5.03398 15.95C5.88711 15.9875 6.15898 15.9969 8.33086 15.9969C10.5027 15.9969 10.7746 15.9875 11.6277 15.95C12.4777 15.9125 13.0621 15.775 13.5684 15.5781C14.0934 15.375 14.5402 15.1 14.984 14.6562C15.4277 14.2125 15.7027 13.7656 15.9059 13.2406C16.1027 12.7313 16.2402 12.15 16.2777 11.3C16.3152 10.4469 16.3246 10.175 16.3246 8.00313C16.3246 5.83125 16.3152 5.55938 16.2777 4.70625C16.2402 3.85625 16.1027 3.27188 15.9059 2.76562C15.709 2.23438 15.4371 1.7875 14.9902 1.34375C14.5465 0.9 14.0996 0.625 13.5746 0.421875C13.0652 0.225 12.484 0.0875 11.634 0.05C10.7777 0.009375 10.5059 0 8.33399 0Z"
                        fill="white"
                      />
                      <path
                        d="M8.33398 3.89062C6.06523 3.89062 4.22461 5.73125 4.22461 8C4.22461 10.2688 6.06523 12.1094 8.33398 12.1094C10.6027 12.1094 12.4434 10.2688 12.4434 8C12.4434 5.73125 10.6027 3.89062 8.33398 3.89062ZM8.33398 10.6656C6.86211 10.6656 5.66836 9.47188 5.66836 8C5.66836 6.52813 6.86211 5.33437 8.33398 5.33437C9.80586 5.33437 10.9996 6.52813 10.9996 8C10.9996 9.47188 9.80586 10.6656 8.33398 10.6656Z"
                        fill="white"
                      />
                      <path
                        d="M13.5652 3.72793C13.5652 4.25918 13.134 4.68731 12.6059 4.68731C12.0746 4.68731 11.6465 4.25606 11.6465 3.72793C11.6465 3.19668 12.0777 2.76855 12.6059 2.76855C13.134 2.76855 13.5652 3.19981 13.5652 3.72793Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2894_561">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0.333984)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_2894_566)">
                      <path
                        d="M14.8156 0H1.18125C0.528125 0 0 0.515625 0 1.15313V14.8438C0 15.4813 0.528125 16 1.18125 16H14.8156C15.4688 16 16 15.4813 16 14.8469V1.15313C16 0.515625 15.4688 0 14.8156 0ZM4.74687 13.6344H2.37188V5.99687H4.74687V13.6344ZM3.55938 4.95625C2.79688 4.95625 2.18125 4.34062 2.18125 3.58125C2.18125 2.82188 2.79688 2.20625 3.55938 2.20625C4.31875 2.20625 4.93437 2.82188 4.93437 3.58125C4.93437 4.3375 4.31875 4.95625 3.55938 4.95625ZM13.6344 13.6344H11.2625V9.92188C11.2625 9.0375 11.2469 7.89687 10.0281 7.89687C8.79375 7.89687 8.60625 8.8625 8.60625 9.85938V13.6344H6.2375V5.99687H8.5125V7.04063H8.54375C8.85938 6.44063 9.63438 5.80625 10.7875 5.80625C13.1906 5.80625 13.6344 7.3875 13.6344 9.44375V13.6344Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2894_566">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bg-white">
        <div class="wrapper">
          <div class="md:flex justify-between items-center">
            <a
              href="#"
              class="inline-block py-8 font-medium text-base text-[#282938]"
              >Copyright 2021, Finsweet.com</a
            >
            <ul class="md:flex gap-x-8">
              <li>
                <a
                  href="#"
                  class="inline-block py-4 font-medium text-base text-[#282938]"
                  >Home</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="inline-block py-4 font-medium text-base text-[#282938]"
                  >About us</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="inline-block py-4 font-medium text-base text-[#282938]"
                  >Features</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="inline-block py-4 font-medium text-base text-[#282938]"
                  >Pricing</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="inline-block py-4 font-medium text-base text-[#282938]"
                  >FAQ</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="inline-block py-4 font-medium text-base text-[#282938]"
                  >Blog</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    )
};
export default Footer;