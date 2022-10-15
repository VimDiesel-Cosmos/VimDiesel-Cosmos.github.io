(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{639:function(t,a,e){"use strict";e.r(a);var l=e(0),n=Object(l.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"bank"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bank"}},[t._v("#")]),t._v(" bank")]),t._v(" "),e("p",{attrs:{synopsis:""}},[t._v("bank module allows you to manage assets for accounts loaded into the local keys module")]),t._v(" "),e("h2",{attrs:{id:"available-commands"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#available-commands"}},[t._v("#")]),t._v(" Available Commands")]),t._v(" "),e("h4",{attrs:{id:"transactions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transactions"}},[t._v("#")]),t._v(" Transactions")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[e("code",[t._v("nibid tx bank")])]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("a",{attrs:{href:"#nibid-tx-bank-send"}},[t._v("send")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Send funds from one account to another.")])])])]),t._v(" "),e("h4",{attrs:{id:"queries"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#queries"}},[t._v("#")]),t._v(" Queries")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[e("code",[t._v("nibid query bank")])]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("a",{attrs:{href:"#nibid-query-bank-balances"}},[t._v("balances")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Query for account balances by address")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("a",{attrs:{href:"#nibid-query-bank-total"}},[t._v("total")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Query the total supply of coins of the chain")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("a",{attrs:{href:"#nibid-query-denom-metadata"}},[t._v("denom-metadata")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Query the client metadata for coin denominations")])])])]),t._v(" "),e("hr"),t._v(" "),e("h3",{attrs:{id:"nibid-query-bank-balances"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nibid-query-bank-balances"}},[t._v("#")]),t._v(" nibid query bank balances")]),t._v(" "),e("p",[t._v("Query the total balance of an account or of a specific denomination.")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"bmliaWQgcXVlcnkgYmFuayBiYWxhbmNlcyBbYWRkcmVzc10gW2ZsYWdzXQo="}}),t._v(" "),e("p",[e("strong",[t._v("Args:")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("address")]),t._v(" "),e("td",[t._v("Bech32 address that the query will return balances for")])])])]),t._v(" "),e("p",[e("strong",[t._v("Flags:")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Name, shorthand")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("--help, -h")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Help for balances")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("--denom")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The specific balance denomination to query for")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("--count-total")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Count total number of records in all balances to query for")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("--height")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Use a specific block height to query state at (this can error if the node is pruning state)")])])])]),t._v(" "),e("h3",{attrs:{id:"nibid-query-bank-total"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nibid-query-bank-total"}},[t._v("#")]),t._v(" nibid query bank total")]),t._v(" "),e("p",[t._v("Query total supply of coins that are held by accounts in the chain.")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"bmliaWQgcXVlcnkgYmFuayB0b3RhbCBbZmxhZ3NdCg=="}}),t._v(" "),e("p",[e("strong",[t._v("Flags:")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Name, shorthand")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("--help, -h")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Help for coin-type")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("--denom")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The specific balance denomination to query for")])])])]),t._v(" "),e("h3",{attrs:{id:"nibid-tx-bank-send"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nibid-tx-bank-send"}},[t._v("#")]),t._v(" nibid tx bank send")]),t._v(" "),e("p",[t._v("Sending tokens to another address, this command includes "),e("code",[t._v("generate")]),t._v(", "),e("code",[t._v("sign")]),t._v(" and "),e("code",[t._v("broadcast")]),t._v(" steps.")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"bmliaWQgdHggYmFuayBzZW5kIFtmcm9tX2tleV9vcl9hZGRyZXNzXSBbdG9fYWRkcmVzc10gW2Ftb3VudF0gW2ZsYWdzXQo="}}),t._v(" "),e("p",[e("strong",[t._v("Flags:")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Name, shorthand")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("--help, -h")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Help for send")])])])])],1)}),[],!1,null,null,null);a.default=n.exports}}]);