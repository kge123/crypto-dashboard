var definition;

function searchFormHandler(e) {
  e.preventDefault();
  document.getElementById("APIDATA").innerHTML = "";
  //make sure that the search input ID matches the ID on line 3
  let input = document.getElementById("searchbar").value;
  //input=input.toLowerCase();
  //    const prices = await fetch('/api/price/feed')
  //    .then(response => {
  //        return response.json()
  //    })
  //console.log of input
  //let x = document.getElementsByClassName('coin');
  console.log(input);
  //filter list based of match criteria
  switch (input) {
    case "Bitcoin":
      definition = document.createElement("p");
      definition.textContent =
        "Bitcoin's original inventor is known under a pseudonym, Satoshi Nakamoto. As of 2021, the true identity of the person — or organization — that is behind the alias remains unknown. On October 31, 2008, Nakamoto published Bitcoin&#39;s whitepaper, which described in detail how a peer-to-peer, online currency could be implemented. They proposed to use a decentralized ledger of transactions packaged in batches (called “blocks”) and secured by cryptographic algorithms — the whole system would later be dubbed “blockchain.” Just two months later, on January 3, 2009, Nakamoto mined the first block on the Bitcoin network, known as the genesis block, thus launching the world&#39;s first cryptocurrency. Bitcoin price was $0 when first introduced, and most Bitcoins were obtained via mining, which only required moderately powerful devices (e.g. PCs) and mining software. The first known Bitcoin commercial transaction occurred on May 22, 2010, when programmer Laszlo Hanyecz traded 10,000 Bitcoins for two pizzas. At Bitcoin price today in mid-September 2021, those pizzas would be worth an astonishing $478 million. This event is now known as “Bitcoin Pizza Day.” In July 2010, Bitcoin first started trading, with the Bitcoin price ranging from $0.0008 to $0.08 at that time. However, while Nakamoto was the original inventor of Bitcoin, as well as the author of its very first implementation, he handed the network alert key and control of the code repository to Gavin Andresen, who later became lead developer at the Bitcoin Foundation. Over the years a large number of people have contributed to improving the cryptocurrency&#39;s software by patching vulnerabilities and adding new features. Bitcoin&#39;s source code repository on GitHub lists more than 750 contributors, with some of the key ones being Wladimir J. van der Laan, Marco Falke, Pieter Wuille, Gavin Andresen, Jonas Schnelli and others. Bitcoin is a decentralized cryptocurrency originally described in a 2008 whitepaper by a person, or group of people, using the alias Satoshi Nakamoto. It was launched soon after, in January 2009. Bitcoin is a peer-to-peer online currency, meaning that all transactions happen directly between equal, independent network participants, without the need for any intermediary to permit or facilitate them. Bitcoin was created, according to Nakamoto&#39;s own words, to allow online payments to be sent directly from one party to another without going through a financial institution.Some concepts for a similar type of a decentralized electronic currency precede BTC, but Bitcoin holds the distinction of being the first-ever cryptocurrency to come into actual use. Bitcoin&#39;s most unique advantage comes from the fact that it was the very first cryptocurrency to appear on the market. It has managed to create a global community and give birth to an entirely new industry of millions of enthusiasts who create, invest in, trade and use Bitcoin and other cryptocurrencies in their everyday lives. The emergence of the first cryptocurrency has created a conceptual and technological basis that subsequently inspired the development of thousands of competing projects. The entire cryptocurrency market — now worth more than $2 trillion — is based on the idea realized by Bitcoin: money that can be sent and received by anyone, anywhere in the world without reliance on trusted intermediaries, such as banks and financial services companies. Thanks to its pioneering nature, BTC remains at the top of this energetic market after over a decade of existence. Even after Bitcoin has lost its undisputed dominance, it remains the largest cryptocurrency, with a market capitalization that surpassed the $1 trillion mark in 2021, after Bitcoin price hit an all-time high of $64,863.10 on April 14, 2021. This is owing in large part to growing institutional interest in Bitcoin, and the ubiquitousness of platforms that provide use-cases for BTC: wallets, exchanges, payment services, online games and more.";
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);
  }
  switch (input) {
    case "Ethereum":
      definition = document.createElement("p");
      definition.textContent =
        "Ethereum has a total of eight co-founders — an unusually large number for a crypto project. They first met on June 7, 2014, in Zug, Switzerland. Russian-Canadian Vitalik Buterin is perhaps the best known of the bunch. He authored the original white paper that first described Ethereum in 2013 and still works on improving the platform to this day. Prior to ETH, Buterin co-founded and wrote for the Bitcoin Magazine news website. British programmer Gavin Wood is arguably the second most important co-founder of ETH, as he coded the first technical implementation of Ethereum in the C++ programming language, proposed Ethereum’s native programming language Solidity and was the first chief technology officer of the Ethereum Foundation. Before Ethereum, Wood was a research scientist at Microsoft. Afterward, he moved on to establish the Web3 Foundation. Among the other co-founders of Ethereum are: - Anthony Di Iorio, who underwrote the project during its early stage of development. - Charles Hoskinson, who played the principal role in establishing the Swiss-based Ethereum Foundation and its legal framework. - Mihai Alisie, who provided assistance in establishing the Ethereum Foundation. - Joseph Lubin, a Canadian entrepreneur, who, like Di Iorio, has helped fund Ethereum during its early days, and later founded an incubator for startups based on ETH called ConsenSys. - Amir Chetrit, who helped co-found Ethereum but stepped away from it early into the development. Ethereum is a decentralized open-source blockchain system that features its own cryptocurrency, Ether. ETH works as a platform for numerous other cryptocurrencies, as well as for the execution of decentralized smart contracts. Ethereum was first described in a 2013 whitepaper by Vitalik Buterin. Buterin, along with other co-founders, secured funding for the project in an online public crowd sale in the summer of 2014. The project team managed to raise $18.3 million in Bitcoin, and Ethereum’s price in the Initial Coin Offering (ICO) was $0.311, with over 60 million Ether sold. Taking Ethereum’s price now, this puts the return on investment (ROI) at an annualized rate of over 270%, essentially almost quadrupling your investment every year since the summer of 2014. The Ethereum Foundation officially launched the blockchain on July 30, 2015, under the prototype codenamed “Frontier.” Since then, there has been several network updates — “Constantinople” on Feb. 28, 2019, “Istanbul” on Dec. 8, 2019, “Muir Glacier” on Jan. 2, 2020, “Berlin” on April 14, 2021, and most recently on Aug. 5, 2021, the “London” hard fork. Ethereum’s own purported goal is to become a global platform for decentralized applications, allowing users from all over the world to write and run software that is resistant to censorship, downtime and fraud. Ethereum has pioneered the concept of a blockchain smart contract platform. Smart contracts are computer programs that automatically execute the actions necessary to fulfill an agreement between several parties on the internet. They were designed to reduce the need for trusted intermediates between contractors, thus reducing transaction costs while also increasing transaction reliability. Ethereum’s principal innovation was designing a platform that allowed it to execute smart contracts using the blockchain, which further reinforces the already existing benefits of smart contract technology. Ethereum’s blockchain was designed, according to co-founder Gavin Wood, as a sort of “one computer for the entire planet,” theoretically able to make any program more robust, censorship-resistant and less prone to fraud by running it on a globally distributed network of public nodes. In addition to smart contracts, Ethereum’s blockchain is able to host other cryptocurrencies, called “tokens,” through the use of its ERC-20 compatibility standard. In fact, this has been the most common use for the ETH platform so far: to date, more than 280,000 ERC-20-compliant tokens have been launched. Over 40 of these make the top-100 cryptocurrencies by market capitalization, for example, USDT, LINK and BNB. Since the emergence of Play2Earn games, there has been a substantial increase in interest in the ETH to PHP price. The Ethereum network has been plagued with high transaction fees, often buckling at seasons of high demand. In May 2021, the average transaction fee of the network peaked at $71.72. In addition to the high cost of transactions, the leading altcoin also suffers from scalability issues. As already mentioned, there are plans to transition to a proof-of-stake algorithm in order to boost the platform’s scalability and add a number of new features. The development team has already begun the transition process to ETH 2.0, implementing some upgrades along the way, including the London hard fork. The London upgrade went live in August 2021. It included five Ethereum Improvement Proposals (EIPs), namely EIP-3529, EIP-3198, EIP-3541, and most notably EIP-1559 and EIP-3554. EIP-1559 is arguably the most popular upgrade out of all the EIPs. The EIP-1559 upgrade introduces a mechanism that changes the way gas fees are estimated on the Ethereum blockchain. Before the upgrade, users had to participate in an open auction for their transactions to be picked up by a miner. This process is known as a “first-price auction,” and as expected, the highest bidder wins. With EIP-1559, this process is handled by an automated bidding system, and there is a set “base fee” for transactions to be included in the next block. This fee varies based on how congested the network is. Furthermore, users who wish to speed up their transactions can pay a “priority fee” to a miner for faster inclusion. EIP-1559 also introduces a fee-burning mechanism. A part of every transaction fee (the base fee) is burned and removed out of circulation. This is intended to lower the circulating supply of Ether and potentially increase the value of the token over time. Interestingly, less than two months after the London upgrade was implemented, the network had burned over $1 billion worth of Ether.";
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);
  }


  switch (input) {
    case "Binance Coin":
      definition = document.createElement("p");
      definition.textContent = "Launched in July 2017, Binance is the biggest cryptocurrency exchange globally based on daily trading volume. Binance aims to bring cryptocurrency exchanges to the forefront of financial activity globally. The idea behind Binance’s name is to show this new paradigm in global finance — Binary Finance, or Binance. Aside from being the largest cryptocurrency exchange globally, Binance has launched a whole ecosystem of functionalities for its users. The Binance network includes the Binance Chain, Binance Smart Chain, Binance Academy, Trust Wallet and Research projects, which all employ the powers of blockchain technology to bring new-age finance to the world. Binance Coin is an integral part of the successful functioning of many of the Binance sub-projects. Binance is a unique ecosystem of decentralized, blockchain-based networks. The company has grown to be the leading crypto exchange in a number of countries, and their side organizations are attracting significant interest as well. One of the biggest competitive advantages Binance has is its drive for development. While the company started only as a crypto exchange back in 2017, today, Binance has spread its services among numerous different spheres. According to the company website, its mission is to become the infrastructure services provider for the entire blockchain ecosystem. Since launching the Binance Coin, the exchange has also benefited from increased investor interest in the token. BNB went through a significant price increase at the beginning of 2021, which has put it on the map of enterprise investors. Changpeng Zhao is the founder and CEO of Binance. In 2001, Zhao joined Bloomberg as head of tradebook futures development. He spent four years with the company and later joined Fusion Systems as a partner. Since 2013, Changpeng Zhao has been actively involved with blockchain technology and cryptocurrencies. He became head of development at Blockchain, and in 2015 he founded BijieTech. In 2017, Zhao officially launched Binance, and he has been the CEO of the company ever since. He Yi is a co-founder and chief marketing officer at Binance. She started her career as a TV anchor and presenter on China Travel TV in 2012. Later, in 2014, Yi co-founded OKCoin, which was the largest fiat-to-crypto exchange in China at the time. In 2017, she joined forces with Changpeng Zhao, and together they created the largest crypto exchange globally — Binance."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }
  switch (input) {
    case "Tether":
      definition = document.createElement("p");
      definition.textContent = "USDT is a stablecoin (stable-value cryptocurrency) that mirrors the price of the U.S. dollar, issued by a Hong Kong-based company Tether. The token’s peg to the USD is achieved via maintaining a sum of commercial paper, fiduciary deposits, cash, reserve repo notes, and treasury bills in reserves that is equal in USD value to the number of USDT in circulation. Originally launched in July 2014 as Realcoin, a second-layer cryptocurrency token built on top of Bitcoin’s blockchain through the use of the Omni platform, it was later renamed to USTether, and then, finally, to USDT. In addition to Bitcoin’s, USDT was later updated to work on the Ethereum, EOS, Tron, Algorand, and OMG blockchains. The stated purpose of USDT is to combine the unrestricted nature of cryptocurrencies — which can be sent between users without a trusted third-party intermediary — with the stable value of the US dollar. USDT’s unique feature is the fact that its value is guaranteed by Tether to remain pegged to the U.S. dollar. According to Tether, whenever it issues new USDT tokens, it allocates the same amount of USD to its reserves, thus ensuring that USDT is fully backed by cash and cash equivalents.  The famously high volatility of the crypto markets means that cryptocurrencies can rise or fall by 10-20% within a single day, making them unreliable as a store of value. USDT, on the other hand, is protected from these fluctuations. This property makes USDT a safe haven for crypto investors: during periods of high volatility, they can park their portfolios in Tether without having to completely cash out into USD. In addition, USDT provides a simple way to transact a U.S. dollar equivalent between regions, countries and even continents via blockchain — without having to rely on a slow and expensive intermediary, like a bank or a financial services provider. However, over the years, there have been a number of controversies regarding the validity of Tether’s claims about their USD reserves, at times disrupting USDT’s price, which went down as low as $0.88 at one point in its history. Many have raised concerns about the fact that Tether’s reserves have never been fully audited by an independent third party."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }

  switch (input) {
    case "Solana":
      definition = document.createElement("p");
      definition.textContent = "Solana is a highly functional open source project that banks on blockchain technology’s permissionless nature to provide decentralized finance (DeFi) solutions. While the idea and initial work on the project began in 2017, Solana was officially launched in March 2020 by the Solana Foundation with headquarters in Geneva, Switzerland. The Solana protocol is designed to facilitate decentralized app (DApp) creation. It aims to improve scalability by introducing a proof-of-history (PoH) consensus combined with the underlying proof-of-stake (PoS) consensus of the blockchain. Because of the innovative hybrid consensus model, Solana enjoys interest from small-time traders and institutional traders alike. A significant focus for the Solana Foundation is to make decentralized finance accessible on a larger scale. One of the essential innovations Solana brings to the table is the proof-of-history (PoH) consensus developed by Anatoly Yakovenko. This concept allows for greater scalability of the protocol, which in turn boosts usability. Solana is known in the cryptocurrency space because of the incredibly short processing times the blockchain offers. Solana’s hybrid protocol allows for significantly decreased validation times for both transaction and smart contract execution. With lightning-fast processing times, Solana has attracted a lot of institutional interest as well. The Solana protocol is intended to serve both small-time users and enterprise customers alike. One of Solana’s main promises to customers is that they will not be surprised by increased fees and taxes. The protocol is designed in such a way as to have low transaction costs while still guaranteeing scalability and fast processing. Combined with the longstanding professional expertise creators Anatoly Yakovenko and Greg Fitzgerald bring to the project, Solana is ranked number 7 in the CoinMarketCap ranking as of September 2021. This came on the back of an impressive bull run, where Solana price gained over 700% since mid-July 2021. The launch of the Degenerate Ape NFT collection sent SOL price to an all-time high (ATH) above $60, and it has been climbing since, largely due to higher developer activity on the Solana ecosystem, greater institutional interest, growing DeFi ecosystem, and the rise of the NFTs and gaming vertical on Solana. Solana price rose to an ATH of $216 on Sept. 9, 2021."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }

  switch (input) {
    case "Cardano":
      definition = document.createElement("p");
      definition.textContent = "Cardano is a proof-of-stake blockchain platform that says its goal is to allow “changemakers, innovators and visionaries” to bring about positive global change. The open-source project also aims to “redistribute power from unaccountable structures to the margins to individuals” — helping to create a society that is more secure, transparent and fair. Cardano was founded back in 2017, and named after the 16th century Italian polymath Gerolamo Cardano. The native ADA token takes its name from the 19th century mathematician Ada Lovelace, widely regarded as the world’s first computer programmer. The ADA token is designed to ensure that owners can participate in the operation of the network. Because of this, those who hold the cryptocurrency have the right to vote on any proposed changes to the software. The team behind the layered blockchain say that there have already been some compelling use cases for its technology, which aims to allow decentralized apps and smart contracts to be developed with modularity. In August 2021, Charles Hoskinson announced the launch of the Alonzo hard fork, causing Cardano price to surge, gaining 116% in the following month. On Sept. 12, 2021, the Cardano ‘Alonzo’ hard fork officially launched, bringing smart contract functionality to the blockchain. Over 100 smart contracts were deployed in the following 24 hours after the launch. Cardano is used by agricultural companies to track fresh produce from field to fork, while other products built on the platform allow educational credentials to be stored in a tamper-proof way, and retailers to clamp down on counterfeit goods. Cardano is one of the biggest blockchains to successfully use a proof-of-stake consensus mechanism, which is less energy intensive than the proof-of-work algorithm relied upon by Bitcoin. Although the much larger Ethereum is going to be upgrading to PoS, this transition is only going to take place gradually. The project has taken pride in ensuring that all of the technology developed goes through a process of peer-reviewed research, meaning that bold ideas can be challenged before they are validated. According to the Cardano team, this academic rigor helps the blockchain to be durable and stable — increasing the chance that potential pitfalls can be anticipated in advance. In 2020, Cardano held a Shelley upgrade that aimed to make its blockchain “50 to 100 times more decentralized” than other large blockchains. At the time, Hoskinson predicted that this would pave the way for hundreds of assets to run on its network. The Alonzo hard fork launch in September 2021 will bring an end to the Shelley era, and usher in the Goguen phase. Users can develop and deploy smart contracts on Cardano, allowing native decentralized applications (DApps) to be built on blockchain. Cardano price broke the $3 mark and hit an all-time high of $3.101 on Sept. 2, 2021, ahead of the launch."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }
  switch (input) {
    case "USD Coin":
      definition = document.createElement("p");
      definition.textContent = "USD Coin (known by its ticker USDC) is a stablecoin that is pegged to the U.S. dollar on a 1:1 basis. Every unit of this cryptocurrency in circulation is backed up by $1 that is held in reserve, in a mix of cash and short-term U.S. Treasury bonds. The Centre consortium, which is behind this asset, says USDC is issued by regulated financial institutions. The stablecoin originally launched on a limited basis in September 2018. Put simply, USD Coin’s mantra is “digital money for the digital age” — and the stablecoin is designed for a world where cashless transactions are becoming more common. Several use cases have been unveiled for the USD Coin. As well as providing a safe haven for crypto traders in times of volatility, those behind the stablecoin say it can also allow businesses to accept payments in digital assets, and shake up an array of sectors including decentralized finance and gaming. Overall, the goal is to create an ecosystem where USDC is accepted by as many wallets, exchanges, service providers and dApps as possible. The stablecoin market has become exceedingly crowded over recent years — but USD Coin has aimed to stand head and shoulders over competitors in several ways. One of them concerns transparency — and giving users the assurance that they will be able to withdraw 1 USDC and receive $1 in return without any issues. To this end, it says a major accounting firm is tasked with verifying the levels of cash that are held in reserve, and ensuring this matches up with the number of tokens in circulation. Unlike some crypto ventures, Circle and Coinbase have also achieved regulatory compliance — and this has helped pave the way for international expansion. Both projects are also well-funded, giving the stablecoin certainty."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }
  switch (input) {
    case "XRP":
      definition = document.createElement("p");
      definition.textContent = "To begin with, it’s important to understand the difference between XRP, Ripple and RippleNet. XRP is the currency that runs on a digital payment platform called RippleNet, which is on top of a distributed ledger database called XRP Ledger. While RippleNet is run by a company called Ripple, the XRP Ledger is open-source and is not based on blockchain, but rather the previously mentioned distributed ledger database. The RippleNet payment platform is a real-time gross settlement (RTGS) system that aims to enable instant monetary transactions globally. While XRP is the cryptocurrency native to the XRP Ledger, you can actually use any currency to transact on the platform. While the idea behind the Ripple payment platform was first voiced in 2004 by Ryan Fugger, it wasn’t until Jed McCaleb and Chris Larson took over the project in 2012 that Ripple began to be built (at the time, it was also called OpenCoin). XRP was created by Ripple to be a speedy, less costly and more scalable alternative to both other digital assets and existing monetary payment platforms like SWIFT. RippleNet’s ledger is maintained by the global XRP Community, with Ripple the company as an active member. The XRP Ledger processes transactions roughly every 3-5 seconds, or whenever independent validator nodes come to a consensus on both the order and validity of XRP transactions — as opposed to proof-of-work mining like Bitcoin (BTC). Anyone can be a Ripple validator, and the list is currently made up of Ripple along with universities, financial institutions and others."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }

  switch (input) {
    case "Polkadot":
      definition = document.createElement("p");
      definition.textContent = "Polkadot is an open-source sharding multichain protocol that facilitates the cross-chain transfer of any data or asset types, not just tokens, thereby making a wide range of blockchains interoperable with each other. This interoperability seeks to establish a fully decentralized and private web, controlled by its users, and simplify the creation of new applications, institutions and services. The Polkadot protocol connects public and private chains, permissionless networks, oracles and future technologies, allowing these independent blockchains to trustlessly share information and transactions through the Polkadot relay chain (explained further down). Polkadot’s native DOT token serves three clear purposes: providing network governance and operations, and creating parachains (parallel chains) by bonding. Polkadot has four core components: Relay Chain: Polkadot’s “heart,” helping to create consensus, interoperability and shared security across the network of different chains; Parachains: independent chains that can have their own tokens and be optimized for specific use cases; Parathread: similar to parachains but with flexible connectivity based on an economical pay-as-you-go model; Bridges: allows parachains and parathreads to connect and communicate with external blockchains like Ethereum. Polkadot is a sharded multichain network, meaning it can process many transactions on several chains in parallel (“parachains”). This parallel processing power improves scalability. Custom blockchains are quick and easy to develop through the Substrate framework and can be connected to Polkadot’s network within minutes. The network is also highly flexible and adaptive, allowing the sharing of information and functionality between participants similar to apps on a smartphone. Polkadot can be automatically upgraded without the need for a fork in order to implement new features or remove bugs. The network has a highly sophisticated user-driven governance system that also helps to secure it. Communities can customize their blockchain’s governance on Polkadot based on their needs and evolving conditions. Nominators, validators, collators and fishermen all fulfil various duties to help secure and maintain the network and eradicate bad behavior."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }
  switch (input) {
    case "Terra":
      definition = document.createElement("p");
      definition.textContent =  "Terra is a blockchain protocol that uses fiat-pegged stablecoins to power price-stable global payments systems. According to its white paper, Terra combines the price stability and wide adoption of fiat currencies with the censorship-resistance of Bitcoin (BTC) and offers fast and affordable settlements. Development on Terra began in January 2018, and its mainnet officially launched in April 2019. As of September 2021, it offers stablecoins pegged to the U.S. dollar, South Korean won, Mongolian tugrik and the International Monetary Funds Special Drawing Rights basket of currencies — and it intends to roll out additional options. Terras native token, LUNA, is used to stabilize the price of the protocols stablecoins. LUNA holders are also able to submit and vote on governance proposals, giving it the functionality of a governance token. Terra seeks to set itself apart through its use of fiat-pegged stablecoins, stating that it combines the borderless benefits of cryptocurrencies with the day-to-day price stability of fiat currencies. It keeps its one-to-one peg through an algorithm that automatically adjusts stablecoin supply based on its demand. It does so by incentivizing LUNA holders to swap LUNA and stablecoins at profitable exchange rates, as needed, to either expand or contract the stablecoin supply to match demand. Terra has established a number of partnerships with payments platforms, particularly in the Asia-Pacific region. In July 2019, Terra announced a partnership with Chai, a South Korea-based mobile payments application, in which purchases made using the application on e-commerce platforms are processed via the Terra blockchain network. Each transaction is subject to (on average) a 2%–3% fee charged to the merchant. In addition, Terra is supported by the Terra Alliance, a group of businesses and platforms advocating for the adoption of Terra. In February 2019, the company announced that e-commerce platforms from 10 different countries, representing a user base of 45 million and a gross merchandise value of $25 billion, were members of the alliance."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }

  switch (input) {
    case "Dogecoin":
      definition = document.createElement("p");
      definition.textContent =  "Dogecoin (DOGE) is based on the popular 'doge' Internet meme and features a Shiba Inu on its logo. The open-source digital currency was created by Billy Markus from Portland, Oregon and Jackson Palmer from Sydney, Australia, and was forked from Litecoin in December 2013. Dogecoin's creators envisaged it as a fun, light-hearted cryptocurrency that would have greater appeal beyond the core Bitcoin audience, since it was based on a dog meme. Tesla CEO Elon Musk posted several tweets on social media that Dogecoin is his favorite coin. Dogecoin differs from Bitcoin's proof-of-work protocol in several ways, one of which is by using Scrypt technology. The altcoin has also a block time of 1 minute, and the total supply is uncapped, which means that there is no limit to the number of Dogecoin that can be mined. You can mine Dogecoin either solo, or by joining a mining pool. A Doge miner can mine the digital currency on Windows, Mac or Linux, and with a GPU. As of 2014, you can also mine Litecoin in the same process of mining Dogecoin, as the processes were merged. Dogecoin has been used primarily as a tipping system on Reddit and Twitter to reward the creation or sharing of quality content. You can get tipped Dogecoin by participating in a community that uses the digital currency, or you can get your Dogecoin from a Dogecoin faucet. A Dogecoin faucet is a website that will give you a small amount of Dogecoin for free as an introduction to the currency, so that you can begin interacting in Dogecoin communities. In 2014, a not-for-profit foundation was formed by members of the Dogecoin team to provide support, advocacy, trademark protection and governance for the cryptocurrency project. However, the foundation was dissolved over time. After several years of being inactive, the foundation was relaunched in 2021 with a “renewed focus on supporting the Dogecoin Ecosystem, community and promoting the future of the Dogecoin Blockchain.” In addition to some of the original core team, the project now has some seasoned industry players as part of its board of advisors. According to the foundation’s website, members of the board will meet monthly to discuss issues relating to Dogecoin. In regards to its advisors, the group is made up of Dogecoin founder Billy Markus, the project’s core developer Max Keller, Ethereum founder Vitalik Buterin and Elon Musk as represented by the head of the Musk’s family office, Jared Birchall. Members of the Board of Advisors will function in various capacities. While Keller will serve as the project’s technical advisor, Markus will be in charge of the community and memes. Meanwhile, Buterin will function as the blockchain and crypto advisor for the foundation, and Birchall will represent Elon Musk as legal and financial advisor. As a first assignment, the Board of Advisors will be working to secure three-year funding that would allow it to employ a small, dedicated staff to work on Dogecoin full-time. Up until now, the work on the ecosystem has been done by volunteers."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }
  
  switch (input) {
    case "Avalanche":
      definition = document.createElement("p");
      definition.textContent =  "Avalanche is a layer one blockchain that functions as a platform for decentralized applications and custom blockchain networks. It is one of Ethereum’s rivals, aiming to unseat Ethereum as the most popular blockchain for smart contracts. It aims to do so by having a higher transaction output of up to 6,500 transactions per second while not compromising scalability. This is made possible by Avalanche’s unique architecture. The Avalanche network consists of three individual blockchains: the X-Chain, C-Chain and P-Chain. Each chain has a distinct purpose, which is radically different from the approach Bitcoin and Ethereum use, namely having all nodes validate all transactions. Avalanche blockchains even use different consensus mechanisms based on their use cases. After its mainnet launch in 2020, Avalanche has worked on developing its own ecosystem of DApps and DeFi. Different Ethereum-based projects such as SushiSwap and TrueUSD have integrated with Avalanche. Furthermore, the platform is constantly working on improving interoperability between its own ecosystem and Ethereum, like through the development of bridges."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }
  switch (input) {
    case "SHIBA INU":
      definition = document.createElement("p");
      definition.textContent =  "Once upon a time, there was a very special dog. That dog was a shiba inu, and this dog inspired millions of people around the world to invest money into tokens with the dog’s image on it. According to the SHIBA INU website, SHIB is the “DOGECOIN KILLER” and will be listed on their own ShibaSwap, a decentralized exchange. Shiba Inu coin was created anonymously in August 2020 under the pseudonym “Ryoshi.” The meme coin quickly gained speed and value as a community of investors was drawn in by the cute charm of the coin paired with headlines and Tweets from personalities like Elon Musk and Vitalik Buterin. Shiba Inu aimed to be the Ethereum-based counterpart to Dogecoin’s Srypt-based mining algorithm. Shiba Inu and the SHIB token are part of a swarm of dog-themed cryptocurrencies, including Baby Dogecoin (BabyDoge), Dogecoin (DOGE), JINDO INU (JIND), Alaska Inu (LAS), and Alaskan Malamute Token (LASM). These lesser-valued tokens have attracted investors who missed the Dogecoin pump from 0.0002 to nearly 0.75 USD. On Sept. 17, 2021, Coinbase, the largest US-based crypto exchange, listed Shiba Inu on their platform. This news caused Shiba Inu price to rise by over 40% in the following two days, bringing the meme dog token into the spotlight again. The SHIBA INU WoofPaper has three reasons why their team created SHIB: “We started from zero, with zero.” “The brilliant minds behind Shib had never collaborated before.” “We love Shiba Inu Dogs.” The anonymous creator of the Shiba Inu coin is known as “Ryoshi.” However, very little is known of the mystery founder of the dog-themed cryptocurrency, much like the founder of Bitcoin, Satoshi Nakamoto. The SHIBA INU website invites dog-inspired artists from all over the world to foster the “artistic Shiba movement” as they bring their SHIBA INU community into the NFT market. SHIBA INU has also created a campaign using Amazon Smile in order to collect donations for rescue real, live Shiba Inu dogs with the Shiba Inu Rescue Association."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }

  switch (input) {
    case "Polygon":
      definition = document.createElement("p");
      definition.textContent =  "Polygon (previously Matic Network) is the first well-structured, easy-to-use platform for Ethereum scaling and infrastructure development. Its core component is Polygon SDK, a modular, flexible framework that supports building multiple types of applications. Polygon effectively transforms Ethereum into a full-fledged multi-chain system (aka Internet of Blockchains). This multi-chain system is akin to other ones such as Polkadot, Cosmos, Avalanche etc. with the advantages of Ethereum’s security, vibrant ecosystem and openness. The $MATIC token will continue to exist and will play an increasingly important role, securing the system and enabling governance. Polygon (formerly Matic Network) is a Layer 2 scaling solution backed by Binance and Coinbase. The project seeks to stimulate mass adoption of cryptocurrencies by resolving the problems of scalability on many blockchains. Polygon combines the Plasma Framework and the proof-of-stake blockchain architecture. The Plasma framework used by Polygon as proposed by the co-founder of Ethereum, Vitalik Buterin, allows for the easy execution of scalable and autonomous smart contracts. Nothing will change for the existing ecosystem built on the Plasma-POS chain. With Polygon, new features are being built around the existing proven technology to expand the ability to cater to diverse needs from the developer ecosystem. Polygon will continue to develop the core technology so that it can scale to a larger ecosystem. Polygon boasts of up to 65,000 transactions per second on a single side chain, along with a respectable block confirmation time of less than two seconds. The framework also allows for the creation of globally available decentralized financial applications on a single foundational blockchain. The Plasma framework gives Polygon the potential of housing an unlimited number of decentralized applications on their infrastructure without experiencing the normal drawbacks common on proof-of-work blockchains. So far, Polygon has attracted more than 50 DApps to its PoS-secured Ethereum sidechain. MATIC, the native tokens of Polygon, is an ERC-20 token running on the Ethereum blockchain. The tokens are used for payment services on Polygon and as a settlement currency between users who operate within the Polygon ecosystem. The transaction fees on Polygon sidechains are also paid in MATIC tokens."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }

  switch (input) {
    case "Crypto.com Coin":
      definition = document.createElement("p");
      definition.textContent =  "Crypto.com Coin (CRO) is the native cryptocurrency token of Crypto.com Chain — a decentralized, open-source blockchain developed by the Crypto.com payment, trading and financial services company. Crypto.com Chain is one of the products in Crypto.com’s lineup of solutions designed to accelerate the global adoption of cryptocurrencies as a means of increasing personal control over money, safeguarding user data and protecting users’ identities. The CRO blockchain serves primarily as a vehicle that powers the Crypto.com Pay mobile payments app. In the future, Crypto.com plans to expand the reach of the CRO platform to power its other products as well. CRO went live in November-December 2018."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }

  switch (input) {
    case "Binance USD":
      definition = document.createElement("p");
      definition.textContent =  "Binance USD (BUSD) is a 1:1 USD-backed stable coin issued by Binance (in partnership with Paxos), Approved and regulated by the New York State Department of Financial Services (NYDFS), The BUSD Monthly Audit Report can be viewed from the official website. Launched on 5 Sep 2019, BUSD aims to meld the stability of the dollar with blockchain technology. It is a digital fiat currency, issued as ERC-20 and supports BEP-2. Based on the price stability, Stablecoin plays an important role in transactions, payments and settlement, and Decentralised Finance (DeFi). Here are some of the BUSD use case: Transfer your digital dollars (BUSD) anywhere in minutes, with low cost and on the blockchain, Trade BUSD on different exchanges and DEX, Deposit BUSD to earn an interest rate, Pay BUSD as payment for goods and services, Use BUSD as collateral and loan asset, Use BUSD as cross collateral in Futures, and/or Store BUSD on an exchange or in a wallet."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }

  switch (input) {
    case "Litecoin":
      definition = document.createElement("p");
      definition.textContent =  "Litecoin (LTC) is a cryptocurrency that was designed to provide fast, secure and low-cost payments by leveraging the unique properties of blockchain technology. The cryptocurrency was created based on the Bitcoin (BTC) protocol, but it differs in terms of the hashing algorithm used, hard cap, block transaction times and a few other factors. Litecoin has a block time of just 2.5 minutes and extremely low transaction fees, making it suitable for micro-transactions and point-of-sale payments. Litecoin was released via an open-source client on GitHub on Oct. 7, 2011, and the Litecoin Network went live five days later on Oct. 13, 2011. Since then, it has exploded in both usage and acceptance among merchants and has counted among the top ten cryptocurrencies by market capitalization for most of its existence. The cryptocurrency was created by Charlie Lee, a former Google employee, who intended Litecoin to be a 'lite version of Bitcoin' in that it features many of the same properties as Bitcoin—albeit lighter in weight."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }

  switch (input) {
    case "Uniswap":
      definition = document.createElement("p");
      definition.textContent =  "Uniswap is a popular decentralized trading protocol, known for its role in facilitating automated trading of decentralized finance (DeFi) tokens. An example of an automated market maker (AMM), Uniswap launched in November 2018, but has gained considerable popularity this year thanks to the DeFi phenomenon and associated surge in token trading. Uniswap aims to keep token trading automated and completely open to anyone who holds tokens, while improving the efficiency of trading versus that on traditional exchanges. Uniswap creates more efficiency by solving liquidity issues with automated solutions, avoiding the problems which plagued the first decentralized exchanges. In September 2020, Uniswap went a step further by creating and awarding its own governance token, UNI, to past users of the protocol. This added both profitability potential and the ability for users to shape its future — an attractive aspect of decentralized entities."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }

  switch (input) {
    case "Algorand":
      definition = document.createElement("p");
      definition.textContent =  "Algorand is a self-sustaining, decentralized, blockchain-based network that supports a wide range of applications. These systems are secure, scalable and efficient, all critical properties for effective applications in the real world. Algorand will support computations that require reliable performance guarantees to create new forms of trust. The Algorand mainnet became live in June 2019, and was able to handle almost 1 million transactions per day as of December 2020. Algorand transaction metrics can be viewed here. Algorand initial coin offering (ICO) was held in June 2019, with the Algorand price of $2.4 per token. Algorand was invented to speed up transactions and improve efficiency, in response to the slow transaction times of Bitcoin and other blockchains. Algorand is designed so that there are lower transaction fees, as well as no mining (like Bitcoin's energy-intensive process), as it is based on a permissionless pure proof-of-stake (PoS) blockchain protocol."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }

  switch (input) {
    case "Chainlink":
      definition = document.createElement("p");
      definition.textContent =  "Founded in 2017, Chainlink is a blockchain abstraction layer that enables universally connected smart contracts. Through a decentralized oracle network, Chainlink allows blockchains to securely interact with external data feeds, events and payment methods, providing the critical off-chain information needed by complex smart contracts to become the dominant form of digital agreement. The Chainlink Network is driven by a large open-source community of data providers, node operators, smart contract developers, researchers, security auditors and more. The company focuses on ensuring that decentralized participation is guaranteed for all node operators and users looking to contribute to the network. Chainlink is one of the first networks to allow the integration of off-chain data into smart contracts. With many trusted partners, Chainlink is one of the major players in the data processing field. Due to the integration of off-chain data, Chainlink has attracted the attention of numerous trusted data providers, including Brave New Coin, Alpha Vantage and Huobi. Data providers can sell access to data directly to Chainlink, thus monetizing the information they have. As a decentralized network, Chainlink allows users to become node operators and earn revenue by running critical data infrastructure required for blockchains’ success. Chainlink uses a large collection of node operators to collectively power a wide range of decentralized Price Feed oracle networks live in-production, which currently secure billions in value for leading DeFi applications like Synthetix, Aave, Compound and more."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }
  switch (input) {
    case "TRON":
      definition = document.createElement("p");
      definition.textContent =  "TRON is a blockchain-based operating system that aims to ensure this technology is suitable for daily use. Whereas Bitcoin can handle up to six transactions per second, and Ethereum up to 25, TRON claims that its network has capacity for 2,000 TPS. This project is best described as a decentralized platform focused on content sharing and entertainment — and to this end, one of its biggest acquisitions was the file sharing service BitTorrent back in 2018. Overall, TRON has divided its goals into six phases. These include delivering simple distributed file sharing, driving content creation through financial rewards, allowing content creators to launch their own personal tokens and decentralizing the gaming industry. TRON is also one of the most popular blockchains for building DApps. TRON has positioned itself as an environment where content creators can connect with their audiences directly. By eliminating centralized platforms — whether they are streaming services, app stores or music sites — it is hoped that creators won’t end up losing as much commission to middlemen. In turn, this could also make content less expensive for consumers. Given how the entertainment sector is increasingly becoming digitized, TRON could have a headstart in applying blockchain technology to this industry. The company also says that it has a talented and experienced developer team, based around the world, that has been drawn from major companies such as Ripple Labs. Last but not least, whereas some other blockchain projects can be opaque about their plans for development, TRON offers a point of difference by delivering a roadmap that shows its intentions for the coming years."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }
  switch (input) {
    case "Bitcoin Cash":
      definition = document.createElement("p");
      definition.textContent =  "Bitcoin Cash is a peer-to-peer electronic cash system that aims to become sound global money with fast payments, micro fees, privacy, and high transaction capacity (big blocks). In the same way that physical money, such as a dollar bill, is handed directly to the person being paid, Bitcoin Cash payments are sent directly from one person to another. As a permissionless, decentralized cryptocurrency, Bitcoin Cash requires no trusted third parties and no central bank. Unlike traditional fiat money, Bitcoin Cash does not depend on monetary middlemen such as banks and payment processors. Transactions cannot be censored by governments or other centralized corporations. Similarly, funds cannot be seized or frozen — because financial third parties have no control over the Bitcoin Cash network. In 2017, the Bitcoin project and its community split in two over concerns about Bitcoin’s scalability. The result was a hard fork which created Bitcoin Cash, a new cryptocurrency considered by supporters to be the legitimate continuation of the Bitcoin project as peer-to-peer electronic cash. All Bitcoin holders at the time of the fork (block 478,558) automatically became owners of Bitcoin Cash. Bitcoin, which was invented by the pseudonymous Satoshi Nakomoto remains a separate cryptocurrency. Unlike Bitcoin (BTC), Bitcoin Cash aims to scale so it can meet the demands of a global payment system. At the time of the split, the Bitcoin Cash block size was increased from 1MB to 8MB. An increased block size means Bitcoin Cash can now handle significantly more transactions per second (TPS) while keeping fees extremely low, solving the issues of payment delays and high fees experienced by some users on the Bitcoin BTC network. As of October 2021, Bitcoin Cash has a block size of 32MB, compared to Bitcoin’s block size of 1MB. Mining is the process in which new Bitcoin Cash transactions are confirmed and new blocks are added to the Bitcoin Cash blockchain. Miners use computing power and electricity to solve complex puzzles. By doing so, they gain the ability to produce new blocks of transactions. If one of their blocks is accepted by the network, the miner, or mining pool, earns a block reward in the form of newly-issued Bitcoin Cash. Mining is highly competitive. As the price of Bitcoin Cash in the marketplace rises, more miners are incentivized to bring more hash rate into the ever-increasing miner competition to produce blocks and have them accepted by the Bitcoin Cash network. More miners make the network more secure by increasing and distributing the hash rate. This prevents a single miner from having control over the network. Anyone can mine Bitcoin Cash. Mining requires specialized hardware called mining equipment, which can either be bought or rented. Miners also need to run a full node software (with the majority of miners currently running BCHN) to build blocks and connect to the rest of the Bitcoin Cash network. Mining can be done independently but miners often pool their hash rate together and share proportionally in the earned block rewards."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }
  switch (input) {
    case "TerraUSD":
      definition = document.createElement("p");
      definition.textContent =  "TerraUSD (UST) is the decentralized and algorithmic stablecoin of the Terra blockchain. It is a scalable, yield-bearing coin that is value-pegged to the US Dollar. TerraUSD was created to deliver value to the Terra community and offer a scalable solution for DeFi amid severe scalability problems faced by other stablecoin leaders like Dai. Thus, TerraUSD promises users a higher level of scalability, interest rate accuracy, and interchain usage. TerraUSD provides several benefits that have made it a stand-out stablecoin competitor. Due to its minting mechanism, UST meets the requirements of DeFi protocols that it uses without losing scalability. UST can also be easily added to crypto wallets by simply integrating TerraUSD as a payment method. Another area where TerraUSD has shown its power is DApps. For example, platforms that mint fungible synthetic assets and track real-life asset prices use UST as a pricing benchmark. TerraUSD (UST) was launched in September 2020 (in collaboration with Bittrex Global) and has since gained the reputation as the most scalable stablecoin. UST can be used in conjunction with LUNA, Terra's non-stablecoin crypto, or as a standalone token."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }
  switch (input) {
    case "Stellar":
      definition = document.createElement("p");
      definition.textContent =  "Put simply, Stellar is an open network that allows money to be moved and stored. When it was released in July 2014, one of its goals was boosting financial inclusion by reaching the world’s unbanked — but soon afterwards, its priorities shifted to helping financial firms connect with one another through blockchain technology. The network’s native token, lumens, serves as a bridge that makes it less expensive to trade assets across borders. All of this aims to challenge existing payment providers, who often charge high fees for a similar service. If all of this sounds familiar, it is worth noting that Stellar was originally based on the Ripple Labs protocol. The blockchain was created as a result of hard fork, and the code was subsequently rewritten. Fees are a sticking point for many. However, high costs when making cross-border payments aren’t just exclusive to fiat-based payments solutions such as PayPal — transaction fees have also been known to go through the roof on the Bitcoin and Ethereum blockchains because of congestion. Stellar is unique because every transaction costs just 0.00001 XLM. Given how one unit of this cryptocurrency only costs a few cents at the time of writing, this helps ensure that users keep more of their money. Few blockchain projects have managed to secure partnerships with big-brand technology companies and fintech firms. A few years ago, Stellar and IBM teamed up to launch World Wire, a project that allowed large financial institutions to submit transactions to the Stellar network and transact using bridge assets such as stablecoins. Although other blockchains have community funds, meaning that grants can be given to projects that help further the ecosystem, Stellar allows its users to vote on which ventures should be given this support."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }
  switch (input) {
    case "Decentraland":
      definition = document.createElement("p");
      definition.textContent =  "Decentraland (MANA) defines itself as a virtual reality platform powered by the Ethereum blockchain that allows users to create, experience, and monetize content and applications. In this virtual world, users purchase plots of land that they can later navigate, build upon and monetize. Decentraland was launched following a $24 million initial coin offering (ICO) that was conducted in 2017. The virtual world launched its closed beta in 2019 and opened to the public in February 2020. Since then, users have created a wide range of experiences on their parcels of LAND, including interactive games, sprawling 3D scenes and a variety of other interactive experiences. Decentraland uses two tokens: MANA and LAND. MANA is an ERC-20 token that must be burned to acquire non-fungible ERC-721 LAND tokens. MANA tokens can also be used to pay for a range of avatars, wearables, names, and more on the Decentraland marketplace. Decentraland is built for content creators, businesses and individuals that are looking for a new artistic medium, business opportunity, or source of entertainment. In total, the Decentraland gameworld — termed the “Metaverse” — is divided into 90,601 individual parcels of LAND, each of which is represented by an ERC-721 non-fungible token. Each LAND is exactly 16m x 16m (256 square meters) and can be found at a particular coordinate in the Metaverse. Though LAND holders are free to develop their plot into whatever they choose, much of the Metaverse is broadly divided into several districts, each of which has a different size and theme. These districts were generated through individual crowdsales for MANA tokens, and parcels of LAND in these districts cannot be traded. As of January 2021, the cyberpunk-themed Aetheria is the largest district — comprising a total of 8,008 LAND. Decentraland is also one of the growing number of projects to use a decentralized autonomous organization (DAO) structure for governance decisions. As a result, MANA toker holders are in control of how the Decentraland world behaves, by proposing and voting on policy updates, the specifics of upcoming LAND auctions and the types of content that are allowed with the Metaverse. Besides being a creative outlet, many Decentraland users currently monetize their LAND through leasing, advertising and paid experiences. Likewise, other users generate an income by creating and selling items on the Decentraland marketplace for MANA tokens."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }
  switch (input) {
    case "Dai":
      definition = document.createElement("p");
      definition.textContent =  "DAI is an Ethereum-based stablecoin (stable-price cryptocurrency) whose issuance and development is managed by the Maker Protocol and the MakerDAO decentralized autonomous organization. The price of DAI is soft-pegged to the U.S. dollar and is collateralized by a mix of other cryptocurrencies that are deposited into smart-contract vaults every time new DAI is minted. It is important to differentiate between Multi-Collateral DAI and Single-Collateral DAI (SAI), an earlier version of the token that could only be collateralized by a single cryptocurrency; SAI also doesn’t support the DAI Savings Rate, which allows users to earn savings by holding DAI tokens. Multi-Collateral DAI was launched in November 2019. DAI’s main advantage lies in its soft peg to the price of the U.S. dollar. The crypto market is notorious for its volatility with even the largest, highly-liquid coins such as Bitcoin sometimes experiencing price changes (both up and down) of 10% or more within a single day. Under these circumstances, traders and investors are naturally predisposed to add safe-haven assets to their portfolios, whose stable price might help offset significant market fluctuations. One such kind of asset are stablecoins, of which DAI is one example. These are cryptocurrencies whose price is pegged to assets with a relatively stable value — most commonly traditional fiat currencies, such as USD or EUR. Another key advantage of DAI is the fact that it is managed not by a private company, but rather by a decentralized autonomous organization via a software protocol. As a result, all instances of issuance and burning of tokens are managed and publicly recorded by Ethereum-powered self-enforcing smart-contracts, making the entire system more transparent and less prone to corruption. In addition, the process of developing DAI software is governed in a more democratic way — via direct voting by the regular participants of the token’s ecosystem."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }

  switch (input) {
    case "FTX Token":
      definition = document.createElement("p");
      definition.textContent =  "FTT is the native cryptocurrency token of the crypto derivatives trading platform FTX that launched on May 8, 2019. The team behind FTX comprises some of the largest crypto traders over the past few years who, having found issues with most mainstream crypto futures exchanges, decided to launch their own platform. FTX claims that it stands out due to such features as clawback prevention, a centralized collateral pool and universal stablecoin settlement. In regards to clawback prevention, a significant amount of customer funds on other derivative exchanges have been claimed by socialized losses. FTX reduces this by using a three-tiered liquidation model. On existing crypto futures exchanges, the collateral is fragmented across separate token wallets; this can be difficult for traders as it prevents positions from getting liquidated. On the other hand, FTX derivatives are stablecoin-settled and only require one universal margin wallet. Another feature of the FTT are leveraged tokens, which allow traders to put leveraged positions without the need to trade on margin. If a trader wants to short Bitcoin with 3x leverage, they can simply buy a 3x short Bitcoin leveraged token on FTX. These tokens are ERC20-compatible and can be listed on any spot exchange. FTX currently offers XRP, BNB, TRX, BTC, ETH, EOS, USDT and LEO leveraged tokens. FTX is backed by Almeda Research, which is known as one of the leading companies in crypto trading and one of the largest liquidity providers. As such, FTX is a product designed by professionals with confirmed expertise in the industry. They cover multiple services: from collateral to maintenance margin to liquidation processes and product listing. FTX also claims to be focused on fast development cycles, allowing them to deploy crypto trading systems at a competitive pace."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }
  switch (input) {
    case "VeChain":
      definition = document.createElement("p");
      definition.textContent =  "VeChain (VET) is a versatile enterprise-grade L1 smart contract platform. VeChain began in 2015 as a private consoritium chain, working with a host of enterprises to explore applications of blockchain. VeChain would begin their transition to public blockchain in 2017 with the ERC-20 token VEN, before launching a mainnet of their own in 2018 using the ticker VET. VeChain aims to use distributed governance and Internet of Things (IoT) technologies to create an ecosystem which solves major data hurdles for multiple global industries from medical to energy, food & beverage to sustainability and SDG goals. By leveraging the power of trustless data, VeChain is building the digital backbone that will underpin the fourth industrial revolution, which demands real-time and trustless data sharing between many participants. The platform uses two tokens, VET and VTHO, to manage and create value based on its VeChainThor public blockchain. VET generates VTHO and acts as the store of value and value transfer medium. VTHO is used to pay for GAS costs, separating the need to expend VET when writing data. This has the additional benefit of ensuring costs of using the network can be kept stable by tweaking certain variables such as the amount of VTHO required to service a transaction, or by increasing the VTHO geneation rate. Such actions first require all-stakeholder community votes. VeChain has been able to demonstrate massively boosted efficiency, traceability and transparency across data trails, supply chains and within novel kinds of ecosystems, such as those in San Marino targeting UN SDGs, among others. VeChain exists to disrupt traditional business models, and is best known for its work in supply chain, an industry that has changed little over the decades. Its work in providing a decentralised trust layer for multi-party ecosystems has already seen major sucesses with high profile clientele and government bodies. Using transparent technology with no single point of weakness or control allows for greater security, efficiency and ease of tracking for all kinds of data, while reducing costs through trustless automation via smart contracts. Carbon, supply chain, international logistics, incentivised ecosystems, automobile passports and more all greatly benefit from the digitisation of trust and colaboration it enables. VeChain’s platform accordingly has very wide appeal to many different clients of clients and industries. VeChain’s official literature notes that its unique proposition lies in its dual-token setup alongside transformative protocols such as 'fee delegation' and it's one-stop 'ToolChain' platform that means crypto-wary companies can pay in fiat for VeChain's Blockchain-as-a-service, while smart contracts handle gas payment costs, ensuring frictionless use of the network, even in strict jurisdictions."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }
  switch (input) {
    case "Filecoin":
      definition = document.createElement("p");
      definition.textContent =  "Filecoin is a decentralized storage system that aims to “store humanity’s most important information.” The project raised $205 million in an initial coin offering (ICO) in 2017, and initially planned a launch date for mid-2019. However, the launch date for the Filecoin mainnet was pushed back until block 148,888, which is expected in mid-October 2020. The project was first described back in 2014 as an incentive layer for the Interplanetary File System (IPFS), a peer-to-peer storage network. Filecoin is open protocol and backed by a blockchain that records commitments made by the network’s participants, with transactions made using FIL, the blockchain’s native currency. The blockchain is based on both proof-of-replication and proof-of-spacetime. Filecoin aims to store data in a decentralized manner. Unlike cloud storage companies like Amazon Web Services or Cloudflare, which are prone to the problems of centralization, Filecoin leverages its decentralized nature to protect the integrity of a data’s location, making it easily retrievable and hard to censor. Decentralized storage systems like Filecoin allow people to be their own custodians of their data, as well as makes the web more accessible to people worldwide. Since participating in the Filecoin network by mining and storing is directly related to winning more block rewards, Filecoin incentives participants to act honestly and store as much data as possible."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }
  switch (input) {
    case "Elrond":
      definition = document.createElement("p");
      definition.textContent =  "Elrond is a blockchain protocol that seeks to offer extremely fast transaction speeds by using sharding. The project describes itself as a technology ecosystem for the new internet, which includes fintech, decentralized finance and the Internet of Things. Its smart contracts execution platform is reportedly capable of 15,000 transactions per second, six-second latency and a $0.001 transaction cost. The blockchain has a native token known as eGold, or EGLD, that is used for paying network fees, staking and rewarding validators. Elrond was first announced in August 2019, and its mainnet went live in July 2020. Elrond describes itself as a blockchain platform for the new internet economy, decentralized applications and enterprise use. Its main selling point is its high scalability, stating that it is the first blockchain network in which state, network and transaction sharding have all been implemented. According to its economics paper, it seeks to build up its ecosystem and establish EGLD as a store-of-value asset. To achieve this goal, the network runs on 2,169 validator nodes split into four shards: three execution shards, capable of 5,400 transactions per second each, and one coordination shard, the 'Metachain.' Elrond's adaptive state sharding architecture completely shards state, transactions and network. It can scale by adding an additional shard when the throughput demand is unmet. It was tested to run 263,000 TPS in a public environment with 1,500 nodes from 29 countries grouped in 50 shards. In order to increase adoption, the project also supports developers building on the platform, allowing them to earn 30% of the smart contract fees as royalties. The company maintains a supply of EGLD tokens to stake on the network during its first year, with validator nodes receiving a 36% annual percentage rate."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }
  switch (input) {
    case "Cosmos":
      definition = document.createElement("p");
      definition.textContent =  "In a nutshell, Cosmos bills itself as a project that solves some of the “hardest problems” facing the blockchain industry. It aims to offer an antidote to “slow, expensive, unscalable and environmentally harmful” proof-of-work protocols, like those used by Bitcoin, by offering an ecosystem of connected blockchains. The project’s other goals include making blockchain technology less complex and difficult for developers thanks to a modular framework that demystifies decentralized apps. Last but not least, an Interblockchain Communication protocol makes it easier for blockchain networks to communicate with each other — preventing fragmentation in the industry. Cosmos’ origins can be dated back to 2014, when Tendermint, a core contributor to the network, was founded. In 2016, a white paper for Cosmos was published — and a token sale was held the following year. ATOM tokens are earned through a hybrid proof-of-stake algorithm, and they help to keep the Cosmos Hub, the project’s flagship blockchain, secure. This cryptocurrency also has a role in the network’s governance. A major concern for some in the crypto industry centers on the levels of fragmentation seen in blockchain networks. There are hundreds in existence, but very few of them can communicate with each other. Cosmos aims to turn this on its head by making this possible. Cosmos is described as “Blockchain 3.0” — and as we mentioned earlier, a big goal is ensuring that its infrastructure is straightforward to use. To this end, the Cosmos software development kit focuses on modularity. This allows a network to be easily built using chunks of code that already exist. Long-term, it’s hoped that complex applications will be straightforward to construct as a result. Scalability is another priority, meaning substantially more transactions can be processed a second than more old-fashioned blockchains like Bitcoin and Ethereum. If blockchains are to ever achieve mainstream adoption, they’ll need to be able to cope with demand as well as existing payment processing companies or websites — or be even better."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }
  switch (input) {
    case "Bitcoin BEP2":
      definition = document.createElement("p");
      definition.textContent =  "Bitcoin BEP2 (BTCB) is a token on the Binance Chain. Each BTCB is 100% backed by a BTC reserve, with the price pegged to Bitcoin at a rate of 1 BTCB = 1 BTC. The reserve address for verification is publicly available to anyone at any time. The Binance cryptocurrency exchange has published the reserve address to demonstrate the transparency of the Bitcoin BEP2 project, as well as to pique the interest of third parties who can freely check the contents of the Bitcoin pool and compare the data with the number of BTCB tokens issued. The project forms part of Binance’s endeavor to provide affordable trading opportunities for users of its decentralized exchange (DEX) – one of the main services supported by Binance Chain. Since its launch on April 18, 2019, Binance Chain has been able to achieve good results regarding decentralization and interoperability in a quite short time. Binance Chain Evolution Proposal 2 (BEP2) was launched in June 2019, outlining a set of technical features, rules and management criteria that tokens must meet in order to function properly in the Binance Chain ecosystem. As Bitcoin is not strong when it comes to DeFi, developers are constantly looking for workarounds and struggle with obstacles that include high fees and a cumbersome process for creating smart contracts. Bitcoin BEP2 is a Bitcoin clone issued on Binance Chain. Its price is always as close as possible to the price of the underlying asset – Bitcoin – and each BTCB is backed by an actual BTC. The pegged BTCB tokens are therefore 100% backed by their own reserve coin, Bitcoin. The advantages of using BTCB include: Since the release of BTCB, traders on Binance DEX have had the opportunity to trade BTC, even if the BTC is hosted on a completely different blockchain. BTCB therefore provides Binance DEX traders with access to even more trading pairs, resulting in increased trading volumes, As the range of available assets has grown, so has liquidity, which is an advantage for users of the exchange, Binance has sealed a strong reputation over the years and has earned the trust of its users, so many users are willing to store their BTC on the platform in order to access BTCB, On Binance Chain, anyone can check the BTC reserves at any convenient time, which attests to the project’s high degree of transparency, Exchange representatives claim that while this approach is more centralized than atomic swaps, it is easier to understand and master for most traders, If developers wish to transfer their assets to Binance Chain, the platform actively promotes this and streamlines the process."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }
  switch (input) {
    case "Ethereum Classic":
      definition = document.createElement("p");
      definition.textContent =  "Ethereum Classic (ETC) is a hard fork of Ethereum (ETH) that launched in July 2016. Its main function is as a smart contract network, with the ability to host and support decentralized applications (DApps). Its native token is ETC. Since its launch, Ethereum Classic has sought to differentiate itself from Ethereum, with the two networks’ technical roadmap diverging further and further from each other with time. Ethereum Classic first set out to preserve the integrity of the existing Ethereum blockchain after a major hacking event led to the theft of 3.6 million ETH. Ethereum Classic’s main aim is to preserve the Ethereum blockchain as it originally was, without artificially countering the DAO hack. Its appeal was first to those who disagreed with Ethereum’s response, but the legacy network has since gained a wider fan base, which include major investors such as Barry Silbert, CEO of investment firm Grayscale. As a voluntary organization, the developers of ETC do not aim to turn the network into a for-profit entity. Users pay transaction fees as with Ethereum, and miners collect them based on work done as per the proof-of-work (PoW) mining algorithm. Unlike Ethereum, Ethereum Classic has no plans to convert to a proof-of-stake (PoS) mining algorithm, while multiple developers continue to work on future improvements such as scaling solutions."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }
  switch (input) {
    case "Hedera":
      definition = document.createElement("p");
      definition.textContent =  "Hedera is the most used, sustainable, enterprise-grade public network for the decentralized economy that allows individuals and businesses to create powerful decentralized applications (DApps). It is designed to be a fairer, more efficient system that eliminates some of the limitations that older blockchain-based platforms face — such as slow performance and instability. It was funded through an initial coin offering (ICO) in August 2018 and first launched open access to its mainnet just over a year later in September 2019. As part of the ICO, investors were able to purchase the platform’s native utility token (HBAR) at the lowest possible pricing. The HBAR token has a dual role within the Hedera public network. First and foremost, HBAR the fuel that powers Hedera services, such as smart contracts, file storage and regular transactions. Second, it's used to help secure the network, since HBAR users can stake their tokens to assist with maintaining the integrity of the platform. Unlike most other cryptocurrency platforms, Hedera Hashgraph isn’t built on top of a conventional blockchain. Instead, it introduces a completely novel type of distributed ledger technology known as a Hashgraph. This technology allows it to improve upon many blockchain-based alternatives in several key areas, including speed, cost, and scalability. Hedera transactions have an average transaction fee of just $0.0001 USD and typically reach finality in under five seconds. Overall, Hedera Hashgraph claims it can handle more than 10,000 transactions per second (TPS) — compared to the around 5-20 for most popular proof-of-work (PoW)-based blockchains. The platform offers several major network services. These include: A token service that allows users to easily configure and mint both fungible and non-fungible tokens (NFTs) on Hedera with just a few lines of code, A consensus service that acts as a layer of trust for any application or network that needs a secure, verifiable log of events, Smart contract tools that let developers build powerful and efficient decentralized applications, and Decentralized file storage services with features include proof-of-deletion, controlled mutability, and time-based file expiry."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }
  switch (input) {
    case "The Sandbox":
      definition = document.createElement("p");
      definition.textContent =  "Launched in 2011 by Pixowl, The Sandbox is a blockchain-based virtual world allowing users to create, build, buy and sell digital assets in the form of a game. By combining the powers of decentralized autonomous organizations (DAO) and non-fungible tokens (NFTs), the Sandbox creates a decentralized platform for a thriving gaming community. According to the official whitepaper, the Sandbox platform’s main mission is to introduce blockchain technology in mainstream gaming successfully. The platform focuses on facilitating a creative “play-to-earn” model, which allows users to be both creators and gamers simultaneously. The Sandbox employs the powers of blockchain technology by introducing the SAND utility token, which facilitates transactions on the platform. The Sandbox is a unique platform because it introduces blockchain technology to the world of gaming. The gaming industry is a huge untapped market when it comes to the adoption of blockchain tech, and Pixowl saw that in 2011. By creating a universe where gamers can create and collect blockchain-based assets, the Sandbox aims to revolutionizes the market. It makes a niche for itself in the global market of gaming. By focusing on user-generated content, the Sandbox creates a metaverse of involved players who contribute to the platform’s further development. Not only that, by introducing the SAND token, the Sandbox promotes decentralized governance and allows users to share their views and ideas about the development of the project. Thanks to the evolving technology, decentralized governance is becoming a must-have in blockchain-based projects. The company started out with a bang and attracted support and investments from numerous big names in the gaming industry. These include brands like Atari, Helix and CryptoKitties."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }
  switch (input) {
    case "Tezos":
      definition = document.createElement("p");
      definition.textContent =  "Tezos is a blockchain network that’s based on smart contracts, in a way that’s not too dissimilar to Ethereum. However, there’s a big difference: Tezos aims to offer infrastructure that is more advanced — meaning it can evolve and improve over time without there ever being a danger of a hard fork. This is something that both Bitcoin and Ethereum have suffered since they were created. People who hold XTZ can vote on proposals for protocol upgrades that have been put forward by Tezos developers. This open-source platform bills itself as “secure, upgradable and built to last” — and says its smart contract language provides the accuracy that is required for high-value use cases. According to Tezos, its approach means that it is futureproof and will “remain state-of-the-art long into the future,” meaning it can embrace developments in blockchain technology. The technology underpinning Tezos was first proposed in a white paper that was released in September 2014. After a series of delays, the Tezos mainnet launched four years later. Although staking is common across blockchains, Tezos has a unique twist on this process. Participants can get involved with the network’s governance through “baking,” where they effectively stake 8,000 XTZ. This creates a financial incentive to act honestly. Bakers are then tasked with voting on proposed changes to the blockchain’s code in a four-step procedure that takes approximately 23 days. Proposals that receive support from the vast majority of participants are put through their paces on a testnet for 48 hours and are fully implemented if they are backed by a super-majority. Tezos is also unique because of how it has started to be used by high-profile businesses. In September 2020, it was announced that the French banking giant Societe Generale planned to use this blockchain for experimenting with a central bank digital currency. Big cryptocurrency exchanges such as Binance and Coinbase have also unveiled support for Tezos staking, meaning users can receive rewards based on the XTZ that they hold. This is not a feature that’s seen too widely across digital assets."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }
  switch (input) {
    case "THETA":
      definition = document.createElement("p");
      definition.textContent =  "Theta (THETA) is a blockchain powered network purpose-built for video streaming. Launched in March 2019, the Theta mainnet operates as a decentralized network in which users share bandwidth and computing resources on a peer-to-peer (P2P) basis.The project is advised by Steve Chen, co-founder of YouTube and Justin Kan, co-founder of Twitch. Theta features its own native cryptocurrency token, THETA, which performs various governance tasks within the network, and counts Google, Binance, Blockchain ventures, Gumi, Sony Europe and Samsung as Enterprise validators, along with a Guardian network of thousands of community-run guardian nodes. Developers say that the project aims to shake up the video streaming industry in its current form — centralization, poor infrastructure and high costs mean that end users often end up with a poor experience. Content creators likewise earn less revenue due to the barriers between them and end users. Theta’s main business concept is to decentralize video streaming, data delivery and edge computing, making it more efficient, cost-effective and fair for industry participants. The network runs on a native blockchain, with two native tokens, known as Theta (THETA), Theta Fuel (TFUEL), powering the internal economy. Theta’s appeal is threefold: viewers get rewarded with better quality streaming service, content creators improve their earnings and middlemen — video platforms — save money on building infrastructure and increase advertising and subscription revenues. Users have an incentive to both watch network content and share network resources, as rewards come in the form of TFUEL tokens. The platform is open source, and token holders receive governance powers as with many proof-of-stake (PoS)-based blockchain ecosystems. In addition to video, data and computing, Theta caters to developers looking to launch decentralized applications (DApps) on its fully featured EVM-compatible Smart contract platform."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }
  switch (input) {
    case "NEAR Protocol":
      definition = document.createElement("p");
      definition.textContent =  "NEAR Protocol is a decentralized application platform designed to make apps usable on the web. The network runs on a Proof-of-Stake (PoS) consensus mechanism called Nightshade, which aims to offer scalability and stable fees. NEAR is the native utility token that is used for: Fees for processing transactions and storing data, Running validator nodes on the network via staking NEAR tokens, and Used for governance votes to determine how network resources are allocated. NEAR tools include: NEAR SDKs which includes standard data structures and testing tools for Rust and AssemblyScript. Gitpod for NEAR to create a zero time onboarding experience for developers. NEAR Wallet that lets application developers create streamlined user experiences, NEAR Explorer to aid with both debugging of contracts and the understanding of network performance, and NEAR Command Line Tools to allow developers to deploy applications from local environments."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }

  switch (input) {
    case "Fantom":
      definition = document.createElement("p");
      definition.textContent =  "Fantom is a directed acyclic graph (DAG) smart contract platform providing decentralized finance (DeFi) services to developers using its own bespoke consensus algorithm. Together with its in-house token FTM, Fantom aims to solve problems associated with smart-contract platforms, specifically transaction speed, which developers say they have reduced to under two seconds. The Fantom Foundation, which oversees the Fantom product offering, was originally created in 2018, with the launch of OPERA, Fantom’s mainnet, coming in December 2019. Fantom attempts to use a new scratch-built consensus mechanism to facilitate DeFi and related services on the basis of smart contracts. The mechanism, Lachesis, promises much higher capacity and two-second transaction finalization, along with improvements to security over traditional proof-of-stake (PoS) algorithm-based platforms. Matching Ethereum, the project appeals to developers looking to deploy decentralized solutions. According to its official literature, its mission is to “grant compatibility between all transaction bodies around the world.” Its in-house PoS token, FTM, forms the backbone of transactions, and allows fee collection and staking activities, along with the user rewards the latter represents. Through token sales in 2018, Fantom raised almost $40 million to fund development."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }

  switch (input) {
    case "BitTorrent":
      definition = document.createElement("p");
      definition.textContent =  "BitTorrent is a popular peer-to-peer (P2P) file sharing and torrent platform which has become increasingly decentralized in recent years. Originally released in July 2001, BitTorrent was purchased by blockchain platform TRON in July 2018. Since its acquisition, BitTorrent has added various new tools, with a dedicated native cryptocurrency token, BTT, released in February 2019. BTT was launched on TRON’s own blockchain, using its TRC-10 standard. According to its official literature, BitTorrent is currently the “largest decentralized P2P communications protocol” in the world. BitTorrent’s original goal was to disrupt the legacy entertainment industry and how consumers obtain content. Expensive and inefficient distribution networks were the main target, with original developer Bram Cohen seeing benefits in allowing internet users to distribute content among themselves directly. In the early 2000s, BitTorrent became the go-to P2P file sharing platform, with TRON stepping in 2018. Under TRON, BitTorrent has expanded its user appeal to those interested in decentralized solutions and cryptocurrency, as well as to its own user base. Among the added features are BitTorrent Speed, which uses the BTT token as part of its operations. BitTorrent has also branched out into paid services, offering several “premium” versions of its platform which include VPN capabilities and ad-free browsing."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }
  switch (input) {
    case "Monero":
      definition = document.createElement("p");
      definition.textContent =  "Monero was launched in 2014, and its goal is simple: to allow transactions to take place privately and with anonymity. Even though it’s commonly thought that BTC can conceal a person’s identity, it’s often easy to trace payments back to their original source because blockchains are transparent. On the other hand, XMR is designed to obscure senders and recipients alike through the use of advanced cryptography. The team behind Monero say privacy and security are their biggest priorities, with ease of use and efficiency coming second. It aims to provide protection to all users — irrespective of how technologically competent they are. Overall, XMR aims to allow payments to be made quickly and inexpensively without fear of censorship. There are several things that make Monero unique. One of the project’s biggest aims is achieving the greatest level of decentralization possible, meaning that a user doesn’t need to trust anyone else on the network. Privacy is achieved through a few distinctive features. Whereas each Bitcoin in circulation has its own serial number, meaning that cryptocurrency usage can be monitored, XMR is completely fungible. By default, details about senders, recipients and the amount of crypto being transferred are obscured — and Monero advocates says this offers an upper hand over rival privacy coins such as Zcash, which are “selectively transparent.” Obfuscation is achieved through the use of ring signatures. Here, past transaction outputs are picked from the blockchain and act as decoys, meaning that outside observers can’t tell who signed it. If Ian was sending 200 XMR to Susan, this amount could also be split into random chunks to add a further level of difficulty. To ensure that transactions cannot be linked to one another, stealth addresses are created for every single transaction that are only used once. All of these distinctive features have led to XMR being increasingly used for illicit transactions instead of Bitcoin — especially on darknet markets. Governments around the world, especially the U.S., have also offered hundreds of thousands of dollars to anyone who can crack Monero’s code."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }
  switch (input) {
    case "UNUS SED LEO":
      definition = document.createElement("p");
      definition.textContent =  "UNUS SED LEO is a utility token that’s used across the iFinex ecosystem. The unusual name is based on a Latin citation from one of Aesop’s fables. The cryptocurrency allows Bitfinex users to save money on trading fees. The extent of the discount depends on how much LEO that the customer has in their account — and the savings on offer are spread across three tiers. There are fluctuations depending on whether a trading pair is crypto-to-crypto, or crypto-to stablecoin. UNUS SED LEO launched in May 2019 — and unlike many other cryptocurrencies out there, it is not designed to exist forever. A token burn mechanism means iFinex is committed to buying back UNUS SED LEO from the market on a monthly basis. The amount that’s purchased and burned is equal to at least 27% of the revenues generated by iFinex — and tokens are also purchased at the market rate. In a news release at the time, the company said: “The burn mechanism will continue until 100% of tokens have been redeemed.” Whereas some cryptocurrencies just launch on a single blockchain, LEO tokens were issued on two blockchains. While 64% of the original supply was on Ethereum, the remaining 36% could be found on EOS."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }
  switch (input) {
    case "Klaytn":
      definition = document.createElement("p");
      definition.textContent =  "Launched in June 2019, Klaytn is a public blockchain platform providing an accessible user experience and development environment in order to convey the value of blockchain technology. The platform combines the best features of both public blockchains (decentralized data and control, distributed governance) and private blockchains (low latency, high scalability) via an efficient 'hybrid' design. Klaytn aims to bring blockchain technology to all types of users, from micro startups to enterprise divisions. The company’s mission is to make decentralization via blockchain available on a global scale. In addition, the project has already secured interest from numerous highly reputable brands around the world. You can easily deploy your own chain or join other chains on Klaytn without any technical knowledge required; you don't need to be an expert in cryptography or have a deep understanding of blockchain technology. Without the need to consult a highly specialized technical advisor, anyone can launch their own token economy ecosystem on Klaytn, according to their literature. As an ecosystem of a wide array of decentralized applications (DApps), Klaytn presents users with the opportunity to find or develop the right type of application for their needs. Because of the decentralized nature of the platform, users have virtually unlimited use cases before them, as app publication is not restricted. Klaytn supports DApps in a multitude of spheres, including digital asset management, art collecting and trade, game development, and decentralized exchanges. Because of this versatility, Klaytn has attracted the attention of institutional investors like Humanspace, Wemade Tree and Piction Network."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }
  switch (input) {
    case "The Graph":
      definition = document.createElement("p");
      definition.textContent =  "The Graph is an indexing protocol for querying data for networks like Ethereum and IPFS, powering many applications in both DeFi and the broader Web3 ecosystem. Anyone can build and publish open APIs, called subgraphs, that applications can query using GraphQL to retrieve blockchain data. There is a hosted service in production that makes it easy for developers to get started building on The Graph and the decentralized network will be launching later this year. The Graph currently supports indexing data from Ethereum, IPFS and POA, with more networks coming soon. To date, over 3,000 subgraphs have been deployed by thousands of developers, for DApps like Uniswap, Synthetix, Aragon, AAVE, Gnosis, Balancer, Livepeer, DAOstack, Decentraland and many others. The Graph usage has been growing at over 50% MoM and hit over 7 billion queries during the month of September 2020. The Graph has a global community, including over 200 Indexer Nodes in the testnet and more than 2,000 Curators in the Curator Program as of October 2020. To fund network development, The Graph raised funds from community members, strategic VCs and influential individuals in the blockchain community including Coinbase Ventures, DCG, Framework, ParaFi Capital, CoinFund, DTC, Multicoin, Reciprocal Ventures, SPC, Tally Capital and others. The Graph Foundation also successfully completed a public GRT Sale with participation from 99 countries (not including the U.S.). To date as of November 2020, The Graph has raised ~$25M. The Graph is working to bring reliable decentralized public infrastructure to the mainstream market. To ensure economic security of The Graph Network and the integrity of data being queried, participants use Graph Token (GRT). GRT is a work token that is locked-up by Indexers, Curators and Delegators in order to provide indexing and curating services to the network. GRT will be an ERC-20 token on the Ethereum blockchain, used to allocate resources in the network. Active Indexers, Curators and Delegators can earn income from the network proportional to the amount of work they perform and their GRT stake. Indexers earn indexing rewards (new issuance) and query fees, while Curators earn a portion of query fees for the subgraphs they signal on. Delegators earn a portion of income earned by the Indexer they delegate to."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }
  switch (input) {
    case "Gala":
      definition = document.createElement("p");
      definition.textContent =  "Gala Games aims to take the gaming industry in a different direction by giving players back control over their games. Gala Games mission is to make “blockchain games you’ll actually want to play.” The project wants to change the fact that players can spend hundreds of dollars on in-game assets, and countless hours spent playing the game, which could be taken away from them with the click of a button. It plans to reintroduce creative thinking into games by giving players control of the games and in-game assets with the help of blockchain technology. Players can own non-fungible tokens (NFTs) and influence the governance of games within the Gala Games ecosystem. The Founder’s Nodes voting mechanism allows players to influence what games Gala should develop and what games should get funding. Besides buying NFTs for specific games, Gala Games also utilizes GALA – its own utility token. So far, Gala Games has released one playable game – Town Star and an NFT collectible series – VOX. It plans to release more games in the future, such as a fantasy RPG game, a sci-fi strategy game and a tower defense game. Since launching in 2019, Gala Games has grown to 1.3 million monthly active users, and 26,000 NFTs have been sold, with the most expensive piece valued at $3 million. Gala Games is not a single game, but rather it offers an entire array of different blockchain games that places fun first and blockchain in the background. Town Star, it's only currently playable game, is a town simulation that can be played in a browser. Players manage a town similar to the gameplay of SimCity, but in Town Star, they actually own the town. VOX is Gala Games’ set of collectible NFT avatars. Each VOX is unique and some VOXs are rarer than others. In the initial drop, 8,888 VOX were distributed for an average price of 0.0888 ETH, or roughly $280 at the time of writing. Although inspired by Town Stars, VOX has other utility besides just being an NFT avatar. Holders can lock up GALA, and earn VOXcoin by playing with their VOX avatars in the future. VOX owners also get their own FBX file, which allows them to animate their avatars, or even 3D print them in the future. Other games are in development as well. Fortified is a player-versus-player tower defense game set in a fantastical medieval world. Players will compete to build the best tower defense strategies. Mirandus is a fantasy role playing game (RPG) set in a massive world ruled by five player-monarchs. Players will be able to own in-game assets and claim parts of the in-game landscape. Echoes of Empire is a sci-fi strategy game set within a galaxy at war. Players will be able to own their own spaceships and control parts of the galaxy. Spider Tank Project is a multiplayer online battle arena game allowing players to pick a “spider tank” to battle other players. The game is free-to-play but will contain in-game earning mechanisms. It is scheduled for release in Q4 2021. A major component when it comes to developing these games is community feedback. Gala Games constantly engage and test assumptions with their community on Discord. This allows players to shape the direction and design of the games. Users can run Gala Nodes, which supports the Gala network. In return, they receive rewards like GALA, limited edition NFTs and other opportunities. The Gala Node ecosystem consists of a triple-proof node system – proof-of-work (PoW), proof-of-stake (PoS) and proof-of-storage. PoW are called Founder Nodes, which are tier-1 nodes based on 50,000 fully-owned NFTs. These are early supporters of the network, and will receive NFTs from all subsequent games and GALA allocated to their node license. PoS are paid nodes that operate for specific games, through a smart contract “rental” structure. Proof-of-Storage are free nodes that will allow the games to be fully hosted on the node ecosystem, removing reliance on centralized hosting solutions like Amazon S3."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }
  switch (input) {
    case "IOTA":
      definition = document.createElement("p");
      definition.textContent =  "IOTA is a distributed ledger with one big difference: it isn’t actually a blockchain. Instead, its proprietary technology is known as Tangle, a system of nodes that confirm transactions. The foundation behind this platform says this offers far greater speeds than conventional blockchains — and an ideal footprint for the ever-expanding Internet of Things ecosystem. Because there’s no blockchain, there are no miners, and because there are no miners, there are no fees. Many established networks see costs balloon when congestion intensifies, but IOTA aims to provide limitless throughput at minimal expense. In time, IOTA’s goal is to become the de facto platform for executing transactions between IoT devices. Given how estimates suggest there could be 20.4 billion such devices out there by 2024, this could end up being big business. The team behind IOTA believe that the potential use cases don’t end here. They believe their distributed ledger could deliver digital identities to all, result in car insurance policies that are based on actual usage, pave the way for cutting-edge smart cities, deliver seamless global trade and prove the authenticity of products. Originally known as Jinn, a crowdsale for the project was held in September 2014, and the network officially launched in 2016. Well, as we alluded to a little earlier, the fact that it’s effectively a blockchainless blockchain is rather unusual to say the least. Tangle’s more technical name is the Directed Acyclic Graph — and as Sønstebø explained in a blog post back in 2015, this technology aims to retain blockchain’s ability to execute secure transactions. The only difference is that it does away with the notion of blocks. He also wrote: “IOTA should not be considered an alternative coin (altcoin) to existing cryptocurrencies such as Bitcoin, rather it is an extension of the growing blockchain ecosystem. It’s meant to work in synergy with these other platforms to form cohesion and symbiotic relationships. IOTA is designed to provide one solution that no other crypto does: efficient, secure, lightweight, real-time micro-transactions without fees.” New transactions are validated by approving two previous transactions from another node — and this is a novel approach because it means that the network’s size and speed will be directly related to how many people are using the platform. And whereas some cryptocurrencies are run as a business, the IOTA Foundation says it is firmly not for profit — adding that it has the sole goal of making the network as prosperous as possible. Finally, IOTA has distinguished itself from many other crypto rivals by establishing high-profile partnerships with the carmaker Volkswagen, and helping the city of Taipei to pursue smart projects."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }
  switch (input) {
    case "Helium":
      definition = document.createElement("p");
      definition.textContent =  "Helium (HNT) is a decentralized blockchain-powered network for Internet of Things (IoT) devices. Launched in July 2019, the Helium mainnet allows low-powered wireless devices to communicate with each other and send data across its network of nodes. Nodes come in the form of so-called Hotspots, which are a combination of a wireless gateway and a blockchain mining device. Users who operate nodes thus mine and earn rewards in Helium’s native cryptocurrency token, HNT. Helium’s goal is to prepare IoT communication for the future, identifying inadequacies in current infrastructure from its birth in 2013. Helium aims to improve the communication capabilities of wireless Internet of Things (IoT) devices. In 2013, infrastructure around IoT was still in its infancy, but developers wanted to add decentralization to their offering, hence referring to it as “The People’s Network” in official literature. Its core appeal will be to device owners and those interested in the IoT space, with financial incentives providing further outreach possibilities. Network participants purchase Hotspots — a combination of a wireless gateway and a miner — or build their own. Each hotspot provides network coverage over a certain radius, and also mines Helium’s native token, HNT. The network runs on proof-of-coverage, a new consensus algorithm based on the HoneyBadger BFT protocol which allows nodes in a network to reach consensus when connection quality is highly variable. In addition to HNT, users pay transaction fees in a separate token called Data Credits, which are not exchangeable and tied to individual users themselves."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }
  switch (input) {
    case "Binance Coin":
      definition = document.createElement("p");
      definition.textContent =
        "Launched in July 2017, Binance is the biggest cryptocurrency exchange globally based on daily trading volume. Binance aims to bring cryptocurrency exchanges to the forefront of financial activity globally. The idea behind Binance's name is to show this new paradigm in global finance — Binary Finance, or Binance. Aside from being the largest cryptocurrency exchange globally, Binance has launched a whole ecosystem of functionalities for its users. The Binance network includes the Binance Chain, Binance Smart Chain, Binance Academy, Trust Wallet and Research projects, which all employ the powers of blockchain technology to bring new-age finance to the world. Binance Coin is an integral part of the successful functioning of many of the Binance sub-projects. Binance is a unique ecosystem of decentralized, blockchain-based networks. The company has grown to be the leading crypto exchange in a number of countries, and their side organizations are attracting significant interest as well. One of the biggest competitive advantages Binance has is its drive for development. While the company started only as a crypto exchange back in 2017, today, Binance has spread its services among numerous different spheres. According to the company website, its mission is to become the infrastructure services provider for the entire blockchain ecosystem. Since launching the Binance Coin, the exchange has also benefited from increased investor interest in the token. BNB went through a significant price increase at the beginning of 2021, which has put it on the map of enterprise investors. Changpeng Zhao is the founder and CEO of Binance. In 2001, Zhao joined Bloomberg as head of tradebook futures development. He spent four years with the company and later joined Fusion Systems as a partner. Since 2013, Changpeng Zhao has been actively involved with blockchain technology and cryptocurrencies. He became head of development at Blockchain, and in 2015 he founded BijieTech. In 2017, Zhao officially launched Binance, and he has been the CEO of the company ever since. He Yi is a co-founder and chief marketing officer at Binance. She started her career as a TV anchor and presenter on China Travel TV in 2012. Later, in 2014, Yi co-founded OKCoin, which was the largest fiat-to-crypto exchange in China at the time. In 2017, she joined forces with Changpeng Zhao, and together they created the largest crypto exchange globally — Binance."
      document.getElementById("APIDATA").append(definition);
      break;
    default:
      definition = document.createElement("p");
      definition.textContent = "";
      document.getElementById("APIDATA").append(definition);

  }

  document.getElementById("searchbar").value = "";

  //DISPLAY search results with check box or ???

  //allow user to save favorites

  //make service call to update favorites

  ///for (i = 0; i < x.length; i++) {
  //     if (!x[i].innerHTML.toLowerCase().includes(input)) {
  //         x[i].style.display="none";
  //     }
  //     else {
  //         x[i].style.display="list-item";
  //     }
  // }
}
document
  .querySelector(".search-form")
  .addEventListener("submit", searchFormHandler);
