(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{572:function(e,t,a){e.exports=a.p+"assets/img/nibi-perps-banner.59dd8d88.png"},645:function(e,t,a){"use strict";a.r(t);var i=a(0),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"🤝-nibi-perps"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#🤝-nibi-perps"}},[e._v("#")]),e._v(" 🤝 Nibi-Perps")]),e._v(" "),i("p",[i("img",{attrs:{src:a(572),alt:""}})]),e._v(" "),i("p",[i("strong",[e._v("Table of Contents —  Nibi-Perps")])]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"#overview"}},[e._v("Overview")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#mark-price-and-index-price"}},[e._v("Mark Price and Index Price")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#leverage-and-position-values"}},[e._v("Leverage and Position Values")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#margin-and-margin-ratio"}},[e._v("Margin and Margin Ratio")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"#cross-margin-versus-isolated-margin"}},[e._v("Cross Margin versus Isolated Margin")])])])]),e._v(" "),i("li",[i("a",{attrs:{href:"#virtual-pools"}},[e._v("Virtual Pools")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#market-specific-parameters"}},[e._v("Market Specific Parameters")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"#trade-limit-ratio"}},[e._v("Trade Limit Ratio")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#fluctuation-limit-ratio"}},[e._v("Fluctuation Limit Ratio")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#max-oracle-spread-limit-ratio"}},[e._v("Max Oracle Spread Limit Ratio")])])])]),e._v(" "),i("li",[i("a",{attrs:{href:"#funding-payments"}},[e._v("Funding Payments")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#liquidations"}},[e._v("Liquidations")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#opening-positions"}},[e._v("Opening Positions")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#perp-nibi-token"}},[e._v("Perp: NIBI Token")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#perp-vip-trading-program"}},[e._v("Perp VIP Trading Program")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#what-are-the-risks-how-are-they-addressed"}},[e._v("What are the risks? How are they addressed?")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"#ecosystem-fund-ef"}},[e._v("Ecosystem Fund (EF)")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#safety-module"}},[e._v("Safety Module")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#treasury"}},[e._v("Treasury")])])])])]),e._v(" "),i("hr"),e._v(" "),i("h2",{attrs:{id:"overview"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),i("p",[e._v("Perps are the most popular financial instrument in the modern day crypto markets. Their trading volume across major exchanges reaches trillions of notional USD value each year.")]),e._v(" "),i("p",[e._v("While most perps exchanges are designed with off-chain order books, perp implementations can differ greatly from exchange to exchange. The Nibiru blockchain powers a decentralized and fully on-chain perpetual futures exchange called "),i("strong",[e._v("NibiPerps")]),e._v(". There are several open problems Nibiru seeks to address with this exchange:")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Minimize latency during periods of high volatility.")])]),e._v(" "),i("li",[i("strong",[e._v("Minimize the imbalance in open interest.")])]),e._v(" "),i("li",[i("strong",[e._v("Increase the number of unique traders on the platform.")])]),e._v(" "),i("li",[i("strong",[e._v("Reduce the bleeding of the ecosystem fund")]),e._v(": One of the top priorities on the Nibiru Perps protocol it to keep the funding rates of the listed perps at parity to all other perpetual futures exchanges while monitoring the opportunity for arbitrageurs.")])]),e._v(" "),i("p",[e._v("Nibi-Perps is currently on private testnet.")]),e._v(" "),i("h2",{attrs:{id:"mark-price-and-index-price"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mark-price-and-index-price"}},[e._v("#")]),e._v(" Mark Price and Index Price")]),e._v(" "),i("p",[e._v("A perpetual futures contract, or perp, is a special type of futures contracts that doesn’t have an expiry date. The derivative value of a perp position is represented by its "),i("strong",[e._v("mark price")]),e._v(", and the value of the underlying is represented by its "),i("strong",[e._v("index price")]),e._v(". Traders can take up to 10x leverage on long or short positions.")]),e._v(" "),i("p",[e._v("Perp positions remain effective until either the trader closes their position or the position goes underwater. This allows traders to speculate on the future price without having to own the underlying asset. More info "),i("a",{attrs:{href:"https://academy.binance.com/en/articles/what-are-perpetual-futures-contracts",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),i("OutboundLink")],1),e._v(".")]),e._v(" "),i("h2",{attrs:{id:"leverage-and-position-values"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#leverage-and-position-values"}},[e._v("#")]),e._v(" Leverage and Position Values")]),e._v(" "),i("p",[i("strong",[e._v("Position Size")])]),e._v(" "),i("p",[e._v("Suppose a trader wanted exposure to 5 ETH through the purchase of a perpetual contract. On Nibi-Perps, going long on 5 ETH means that the trader buys the ETH perp with a "),i("strong",[e._v("position size")]),e._v(" of 5. Position size is computed as the position notional mutliplied by the mark price of the asset.")]),e._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ayA9IGJhc2VSZXNlcnZlcyAqIHF1b3RlUmVzZXJ2ZXMKbm90aW9uYWxEZWx0YSA9IG1hcmdpbiAqIGxldmVyYWdlIC8vIChub3Rpb25hbERlbHRhIGlzIG5lZ2F0aXZlIGlmIHNob3J0KQpiYXNlUmVzZXJ2ZXNBZnRlclN3YXAgPSBrIC8gKHF1b3RlUmVzZXJ2ZXMgKyBub3Rpb25hbERlbHRhKQpwb3NpdGlvbl9zaXplID0gYmFzZVJlc2VydmVzIC0gYmFzZVJlc2VydmVzQWZ0ZXJTd2FwCg=="}}),e._v(" "),i("p",[i("strong",[e._v("Position Notional Value")])]),e._v(" "),i("p",[e._v("The notional value of the position, or "),i("strong",[e._v("position notional")]),e._v(", is the total value a position controls in units of the quote asset. Notional value expresses the value a derivatives contract theoretically controls. On Nibiru, it is defined more concretely by")]),e._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cG9zaXRpb25Ob3Rpb25hbCA9IGFicyhxdW90ZVJlc2VydmVzIC0gayAvIChiYXNlUmVzZXJ2ZXMgKyBwb3NpdGlvbl9zaXplKSkKbGV2ZXJhZ2UgPSBwb3NpdGlvbk5vdGlvbmFsIC8gbWFyZ2luLgo="}}),e._v(" "),i("p",[e._v("Let's say that the mark price of ether is $3000 in our previous example. This implies that the trader with a long position of size 5 has a position notional of $15,000. And if the trader has 10x "),i("strong",[e._v("leverage")]),e._v(", for example, she must have put down $1500 as margin (collateral backing the position).")]),e._v(" "),i("h2",{attrs:{id:"margin-and-margin-ratio"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#margin-and-margin-ratio"}},[e._v("#")]),e._v(" Margin and Margin Ratio")]),e._v(" "),i("p",[i("strong",[e._v("Margin")]),e._v(" is the amount of collateral used to back a position. Margin is expressed in units of the quote asset. At genesis, Nibi-Perps uses USDC as the primary quote asset.")]),e._v(" "),i("p",[e._v("The margin ratio is defined by:")]),e._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"bWFyZ2luUmF0aW8gPSAobWFyZ2luICsgdW5yZWFsaXplZFBuTCkgLyBwb3NpdGlvbk5vdGlvbmFsCg=="}}),e._v(" "),i("p",[e._v("Here, "),i("code",[e._v("unrealizedPnL")]),e._v(" is computed using either the mark price or the 15 minute TWAP of mark price; the higher of the two values is used when evaluating liquidation conditions.")]),e._v(" "),i("p",[e._v("When the virtual price is not within the spread tolerance to the index price, the margin ratio used is the highest value between a calculation with the index price (oracle based on underlying) and the mark price (derivative price).")]),e._v(" "),i("p",[e._v("Another good way to think about margin ratio is as the inverse of a position's effective leverage. I.e. if a trader puts down $100 as margin with 5x leverage, the notional is $500 and the margin ratio is 20%, which is equivalent to "),i("code",[e._v("1 / leverage")]),e._v(".")]),e._v(" "),i("h3",{attrs:{id:"cross-margin-versus-isolated-margin"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#cross-margin-versus-isolated-margin"}},[e._v("#")]),e._v(" Cross Margin versus Isolated Margin")]),e._v(" "),i("ul",[i("li",[e._v("In a "),i("strong",[e._v("cross margin")]),e._v(" model, collateral is shared between open positions that use the same settlement currency. All open positions then have a combined margin ratio.")]),e._v(" "),i("li",[e._v("With an "),i("strong",[e._v("isolated margin")]),e._v(" model, the margin assigned to each open position is considered a separate collateral account.")])]),e._v(" "),i("p",[i("strong",[e._v("Current implementation")]),e._v(": Nibi-Perps uses isolated margin on each trading pair. This means that excess collateral on one position is not affected by a deficit on another (and vice versa). Positions are siloed in terms of liquidation risks, so an underwater ETH:USD position won't have any effect on an open ATOM:USD position, for instance.")]),e._v(" "),i("p",[e._v("In future upgrade, we'd like to implement a cross margin model and allow traders to select whether to use cross or isolated margin in the trading app. This way, traders could elect to have profits from one position support losses in another.")]),e._v(" "),i("h2",{attrs:{id:"virtual-pools"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#virtual-pools"}},[e._v("#")]),e._v(" Virtual Pools")]),e._v(" "),i("p",[e._v("Positions on Nibiru Perps are priced using virtual liquidity pools with no real liquidity stored inside. In this model, assets are priced using the constant product model ("),i("code",[e._v("x*y=k")]),e._v(") pioneered by Uniswap. Tokens are sent to a clearing house, which stores the collateral in a vault, and virtual pools are used for price discovery of the derivatives. This allows for the use of leverage trading and removes the need for liquidity providers, or market makers.")]),e._v(" "),i("p",[e._v("Virtual pools enable Nibiru to have "),i("strong",[e._v("clear pricing rules.")]),e._v(" Each perpetual futures contract specifies the base asset’s quantity delivered for a single contract. For instance, OSMO/USDC, UMEE/USDC and ATOM/USDC futures contracts represent only one unit of the base assets OSMO, UMEE, and ATOM, similar to spot markets.")]),e._v(" "),i("h2",{attrs:{id:"market-specific-parameters"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#market-specific-parameters"}},[e._v("#")]),e._v(" Market Specific Parameters")]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",[e._v("For the full specification of all parameters involved in Nibi-Perps, see the "),i("RouterLink",{attrs:{to:"/cli/modules/perp.html#parameters-of-nibi-perps"}},[i("code",[e._v("perp")]),e._v(" module technical documentation")]),e._v(".")],1)]),e._v(" "),i("h3",{attrs:{id:"trade-limit-ratio"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#trade-limit-ratio"}},[e._v("#")]),e._v(" Trade Limit Ratio")]),e._v(" "),i("p",[e._v("Every virtual pool has a parameter called the "),i("code",[e._v("TradeLimitRatio")]),e._v(", which limits how much of the asset reserves a trader can affect in a single transaction. For example, if a virtual pool had 100 BTC and 2,000,000 NUSD, a "),i("code",[e._v("TradeLimitRatio")]),e._v(" of "),i("code",[e._v("0.1")]),e._v(" would only allow the trader to deposit or withdraw up to 10 BTC or 200,000 NUSD. This is done to prevent predatory traders from sending other traders' positions underwater.")]),e._v(" "),i("h3",{attrs:{id:"fluctuation-limit-ratio"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#fluctuation-limit-ratio"}},[e._v("#")]),e._v(" Fluctuation Limit Ratio")]),e._v(" "),i("p",[e._v("Similar to the trade limit ratio, every virtual pool has a parameter called the "),i("code",[e._v("FluctuationLimitRatio")]),e._v(". The fluctuation limit ratio limits inter-block fluctuations of the reserve assets. For example, if a virtual pool had 100 BTC and 2,000,000 NUSD at block 1, along with a "),i("code",[e._v("FluctuationLimitRatio")]),e._v(" of 0.2, then the maximum amount of reserve asset fluctuation that can happen in block 2 is 20 BTC or 400,000 NUSD. This is also to prevent predatory traders from sending other traders' positions underwater.")]),e._v(" "),i("h3",{attrs:{id:"max-oracle-spread-limit-ratio"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#max-oracle-spread-limit-ratio"}},[e._v("#")]),e._v(" Max Oracle Spread Limit Ratio")]),e._v(" "),i("p",[e._v("Every virtual pool has a parameter called the "),i("code",[e._v("MaxOracleSpreadLimitRatio")]),e._v(". It comes into effect in extreme market conditions, when the mark (spot) price has deviated from the index (oracle) price by too much. Liquidations will start happening based on the index price instead of the mark price.")]),e._v(" "),i("p",[e._v("For example, let's imagine a virtual pool of BTC/NUSD and a "),i("code",[e._v("MaxOracleSpreadLimitRatio")]),e._v(" of "),i("code",[e._v("0.1")]),e._v(". One day, the mark price and index price are equal to each other at $1000 (1000 NUSD per BTC). The next day, if the index price stays constant at $1000, but the mark price moves to 1100 or 900, then the oracle price is used for determining margin ratio and, thus, liquidations. This is to protect traders in times of extreme market volatility.")]),e._v(" "),i("h2",{attrs:{id:"funding-payments"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#funding-payments"}},[e._v("#")]),e._v(" Funding Payments")]),e._v(" "),i("p",[e._v("Perpetual contracts rely on a scheduled payment between longs and shorts known as "),i("strong",[e._v("funding payments")]),e._v(". Funding payments are meant to converge the price between the derivate contract, or perp, and its underlying. As a result, they are scaled based on the difference between the mark price and index price.")]),e._v(" "),i("p",[e._v("Longs and shorts are paid with the exact funding rate formula "),i("a",{attrs:{href:"https://help.ftx.com/hc/en-us/articles/360027946571-Funding",target:"_blank",rel:"noopener noreferrer"}},[e._v("used by FTX"),i("OutboundLink")],1),e._v(". Realized and unrealized funding payments are updated every block directly on each position. Global funding calculations are recorded in a time-weighted fashion, where the "),i("strong",[e._v("funding rate")]),e._v(" is the difference between the mark TWAP and index TWAP divided by the number of funding payments per day:")]),e._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuZGluZ1JhdGUgPSAobWFya1RXQVAgLSBpbmRleFRXQVApIC8gZnVuZGluZ1BheW1lbnRzUGVyRGF5Cg=="}}),e._v(" "),i("p",[e._v("In the initial version of Nibi-Perps, these payments will occur every half-hour, implying a "),i("code",[e._v("fundingPaymentsPerDay")]),e._v(" value of 48. This setup is analogous to a traditional future that expires once a day. If a perp trades consistently at 2% above its underlying index price, the funding payments would amount to 2% of the position size after a full day.")]),e._v(" "),i("p",[e._v("If the funding rate is positive, mark price is greater than index price and longs pay shorts. Nibi-Perps automatically deducts the funding payment amount from the margin of the long positions.")]),e._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuZGluZ1BheW1lbnQgPSBwb3NpdGlvblNpemUgKiBmdW5kaW5nUmF0ZQo="}}),e._v(" "),i("p",[e._v("Here, position size refers to amount of base asset represented by the derivative. I.e., a BTC:USD perp with 7 BTC of exposure would have a position size of 7.")]),e._v(" "),i("h2",{attrs:{id:"liquidations"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#liquidations"}},[e._v("#")]),e._v(" Liquidations")]),e._v(" "),i("p",[e._v("When using leverage on positions, traders naturally become exposed to liquidation risks. For example, when the underlying value of a trader’s perp declines, the derivative asset will approach the value of its margin, putting the exchange at risk. To prevent the position from falling below the value of the margin that backs it, the protocol will proactively liquidate the position. Liquidations are triggered by "),i("strong",[e._v("liquidations bots")]),e._v(" that earn a small percentage of the remaining position.")]),e._v(" "),i("p",[i("strong",[i("code",[e._v("Liquidate")])]),e._v(" is a function which closes a position and distributes assets based on a liquidation fee that goes to the liquidator and ecosystem fund. Liquidations prevent traders' accounts from falling into negative equity.")]),e._v(" "),i("p",[e._v("A liquidation happens when a trader can no longer meet the margin requirement of their leveraged position. In Nibiru, meeting the margin requirement means maintaining a margin ratio on the position that exceeds the "),i("strong",[e._v("maintenance margin ratio")]),e._v(" (6.25%), which is the minimum margin ratio that a position can have before being liquidated.")]),e._v(" "),i("p",[e._v("When a liquidator address sends a message to liquidate a position, the protocol keeper first computes the margin ratio of the position using the mark price. The notional is taken to be that maximum of the "),i("code",[e._v("markSpot")]),e._v(" (mark at an instance in time) notional and "),i("code",[e._v("markTWAP")]),e._v(" notional. Similarly, the unrealized PnL is taken to be the max of the "),i("code",[e._v("markSpot")]),e._v(" PnL and "),i("code",[e._v("markTWAP")]),e._v(' PnL. This computation realizes any outstanding funding payments on the position, tells us whether or not the position is underwater, and tells us if the position has "'),i("strong",[e._v("bad debt")]),e._v('" (margin owed in excess of the collateral backing the position).')]),e._v(" "),i("p",[e._v("If this margin ratio is below the maintenance margin ratio, the liquidation message will close the position. This consists of opening a reverse position with a size equivalent to the one that is currently open, which brings the size to zero. A liquidation fee is taken out of the margin and distributed in some split (currently 50:50) between the Nibi-Perps Ecosystem Fund (Perp EF) and the liquidator. If any margin remains in the position after the liquidation fee is taken out, this remaining margin is sent back to the owner of the position. And if bad debt is created by the liquidation fee, it is payed by the Perp EF.")]),e._v(" "),i("h2",{attrs:{id:"opening-positions"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#opening-positions"}},[e._v("#")]),e._v(" Opening Positions")]),e._v(" "),i("p",[e._v("When opening a position, tokens are deposited and locked as "),i("strong",[e._v("margin")]),e._v(". Under the hood, these tokens are stored with the "),i("strong",[e._v("clearing house")]),e._v(", which uses the virtual pools for price discovery, converting the deposit into virtual assets.")]),e._v(" "),i("p",[e._v("These virtual assets change the reserves of their corresponding pool, determining the price of the derivative (position) while enabling the use of leverage. The protocol controls the funding payments in NUSD, actively monitoring the liquidation and the management of the Ecosystem Fund.")]),e._v(" "),i("h2",{attrs:{id:"perp-nibi-token"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#perp-nibi-token"}},[e._v("#")]),e._v(" Perp: NIBI Token")]),e._v(" "),i("p",[e._v("Holders who stake their NIBI tokens can vote on or propose new ideas to improve the perps protocol. A small percentage of the protocol’s NIBI inflation feeds into the Ecosystem Fund. NIBI stakers vote on, among others, exchange improvements, parameter alterations, new feature implementations, chain updates, and alterations to reward mechanisms.")]),e._v(" "),i("h2",{attrs:{id:"perp-vip-trading-program"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#perp-vip-trading-program"}},[e._v("#")]),e._v(" Perp VIP Trading Program")]),e._v(" "),i("p",[e._v("Stakers of NIBI enjoy a trading fee discount proportional to the amount staked. Stakers also have the ability to vote on exchange improvements, parameter alterations, new feature implementations, chain updates, and inflationary reward mechanisms.")]),e._v(" "),i("h2",{attrs:{id:"what-are-the-risks-how-are-they-addressed"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#what-are-the-risks-how-are-they-addressed"}},[e._v("#")]),e._v(" What are the risks? How are they addressed?")]),e._v(" "),i("p",[e._v("Naturally, risks are inherent with any novel project being built. Nibiru’s ecosystem is built to promote the robust decentralization, permissionless creation of perps. As a result, community members can start trading without the supervision of a central authority, meaning the safety of having a facilitating party will not exist to the same degree. That being said, new market proposals will require governance approval for listing and a listing fee in NIBI tokens.")]),e._v(" "),i("p",[e._v("The permissionless state of market creation can drive the protocol to in-solvency in a black swan event. To mitigate against the risk of one market spilling over to others, Nibiru has "),i("strong",[e._v("3 layers of backstop")]),e._v(" to account for periods of extreme volatility. In ordered priority, these are the "),i("strong",[e._v("Ecosystem Fund, Safety Module, and the Treasury")]),e._v(":")]),e._v(" "),i("h3",{attrs:{id:"ecosystem-fund-ef"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ecosystem-fund-ef"}},[e._v("#")]),e._v(" Ecosystem Fund (EF)")]),e._v(" "),i("p",[e._v("The EF is is seeded at the genesis within an initial supply from the community token allocation. The EF doesn’t accrue inflation but instead increases its reserves from (1) the collection of transaction fees on perpetual swaps, (2) fees from liquidations, and (3) investment of excess capital deployed on the platform.")]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",[e._v("You may see the Ecosystem Fund of Nibi-Perps referred to as the "),i("code",[e._v("PerpEF")]),e._v(" in the technical documentation.")])]),e._v(" "),i("p",[e._v("Using these revenue streams, "),i("strong",[e._v("the EF steps in to pay funding payments to correct the imbalance paid between long and short traders")]),e._v(". If the mark and index prices differ substantially with a large aggregate position size, the EF may pay too much in funding.")]),e._v(" "),i("p",[e._v("And "),i("strong",[e._v("when liquidations don't occur on time")]),e._v(", positions can end up with bad debt, which is also "),i("strong",[e._v("covered by the EF")]),e._v(". For market crashes and other high volatility events, Nibiru’s liquidation parameters have been based on a ladder based framework taking into account the idiosyncrasies of each asset on the platform.")]),e._v(" "),i("p",[e._v("For example, if an asset has only a spot DEX and Nibiru as its liquidity venues, then such asset can be extremely volatile, warranting different liquidation parameters (such as lower max leverage). Whereas if the assets are BTC or ETH, which are traded on multiple venues CEX/DEX, then the parameters for liquidation are standardized to Perpetual/Drift protocol.")]),e._v(" "),i("h3",{attrs:{id:"safety-module"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#safety-module"}},[e._v("#")]),e._v(" Safety Module")]),e._v(" "),i("p",[e._v("The next backstop in the case of insolvency on perpetual positions is the Safety Fund. This is a module account in which users could elect to stake NIBI, risking dilutive events in order to backstop and govern the risk on Nibi-Perps. For certain drawdown ranges, NIBI from the Safety Fund could be slashed from stakers and auctioned off against other assets to lessen the severity of the event. Funds from the module can be if liquidations are not profitable enough or if Nibiru governance deems it necessary.")]),e._v(" "),i("p",[e._v("Staking into the Safety Fund would create an opportunity for NIBI holders to earn additional yield relative to delegating/validating in Nibiru proof-of-stake. If drawdown ranges exceed values manageable by the Ecosystem Fund, the Safety Fund takes its place.")]),e._v(" "),i("p",[e._v("Nibiru should never need the Safety Fund, but we include it as an extra precaution.")]),e._v(" "),i("h3",{attrs:{id:"treasury"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#treasury"}},[e._v("#")]),e._v(" Treasury")]),e._v(" "),i("p",[e._v('The protocol Treasury will be the final backstop to minimize drawdown. This is the last fail safe for the protocol. "NIBI printing" is not a stability mechanism for the perps exchange.')])],1)}),[],!1,null,null,null);t.default=r.exports}}]);