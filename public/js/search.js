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
