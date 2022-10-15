(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{628:function(t,v,e){"use strict";e.r(v);var _=e(0),n=Object(_.a)({},(function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"nibid-command-line-interface-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nibid-command-line-interface-cli"}},[t._v("#")]),t._v(" Nibid Command-Line Interface (CLI)")]),t._v(" "),e("p",{attrs:{synopsis:""}},[t._v("An introduction to the using the "),e("code",[t._v("nibid")]),t._v(" CLI along with a brief description of commands and flags")]),t._v(" "),e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),e("p",[e("code",[t._v("nibid")]),t._v(" is a command line client for the Nibiru network. Nibiru users can use "),e("code",[t._v("nibid")]),t._v(" to send transactions to the Nibiru network and query the blockchain data.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",[t._v("See "),e("a",{attrs:{href:"./nibid-binary"}},[t._v('"Nibid Setup"')]),t._v(" for instructions on installing "),e("code",[t._v("nibid")]),t._v(".")])]),t._v(" "),e("h3",{attrs:{id:"working-directory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#working-directory"}},[t._v("#")]),t._v(" Working Directory")]),t._v(" "),e("p",[t._v("The default working directory for the "),e("code",[t._v("nibid")]),t._v(" is "),e("code",[t._v("$HOME/.nibid")]),t._v(", which is mainly used to store configuration files and blockchain data. The Nibiru "),e("code",[t._v("key")]),t._v(" data is saved in the working directory of "),e("code",[t._v("nibid")]),t._v(". You can also specify the "),e("code",[t._v("nibid")]),t._v(" working directory by using the "),e("code",[t._v("--home")]),t._v(" flag when executing "),e("code",[t._v("nibid")]),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"connecting-to-a-full-node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connecting-to-a-full-node"}},[t._v("#")]),t._v(" Connecting to a Full-Node")]),t._v(" "),e("p",[t._v("By default, "),e("code",[t._v("nibid")]),t._v(" uses "),e("code",[t._v("tcp://localhost:26657")]),t._v(" as the RPC address to connect to the Nibiru network. This default configuration assumes that the machine executing "),e("code",[t._v("nibid")]),t._v(" is running as a full-node.")]),t._v(" "),e("p",[t._v("The RPC address can be specified to connect to any full-node with an exposed RPC port by adding the "),e("code",[t._v("--node")]),t._v(" flag when executing "),e("code",[t._v("nibid")])]),t._v(" "),e("h3",{attrs:{id:"global-flags"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#global-flags"}},[t._v("#")]),t._v(" Global Flags")]),t._v(" "),e("h4",{attrs:{id:"get-commands"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-commands"}},[t._v("#")]),t._v(" GET Commands")]),t._v(" "),e("p",[t._v("All GET commands have the following global flags:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name, shorthand")]),t._v(" "),e("th",[t._v("type")]),t._v(" "),e("th",[t._v("Default Value")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("--chain-id")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("The network Chain ID")])]),t._v(" "),e("tr",[e("td",[t._v("--home")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("$HOME/.nibid")]),t._v(" "),e("td",[t._v("Directory for config and data")])]),t._v(" "),e("tr",[e("td",[t._v("--trace")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Print out full stack trace on errors")])]),t._v(" "),e("tr",[e("td",[t._v("--log_format")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("plain")]),t._v(" "),e("td",[t._v("Logging format (json | plain)")])])])]),t._v(" "),e("h4",{attrs:{id:"post-commands"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#post-commands"}},[t._v("#")]),t._v(" POST Commands")]),t._v(" "),e("p",[t._v("All POST commands have the following global flags:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name, shorthand")]),t._v(" "),e("th",[t._v("type")]),t._v(" "),e("th",[t._v("Default")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("--account-number")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[e("code",[t._v("AccountNumber")]),t._v(" to sign the tx")])]),t._v(" "),e("tr",[e("td",[t._v("--broadcast-mode")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("sync")]),t._v(" "),e("td",[t._v("Transaction broadcasting mode (sync | async | block)")])]),t._v(" "),e("tr",[e("td",[t._v("--dry-run")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("Ignore the --gas flag and perform a simulation of a transaction, but don't broadcast it")])]),t._v(" "),e("tr",[e("td",[t._v("--fees")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Fees to pay along with transaction")])]),t._v(" "),e("tr",[e("td",[t._v("--from")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Name of private key with which to sign")])]),t._v(" "),e("tr",[e("td",[t._v("--gas")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("200000")]),t._v(" "),e("td",[t._v('Gas limit to set per-transaction; set to "simulate" to calculate required gas automatically')])]),t._v(" "),e("tr",[e("td",[t._v("--gas-adjustment")]),t._v(" "),e("td",[t._v("float")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("Adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set")])]),t._v(" "),e("tr",[e("td",[t._v("--gas-prices")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Gas prices in decimal format to determine the transaction fee")])]),t._v(" "),e("tr",[e("td",[t._v("--generate-only")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("Build an unsigned transaction and write it to STDOUT")])]),t._v(" "),e("tr",[e("td",[t._v("--help, -h")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Print help message")])]),t._v(" "),e("tr",[e("td",[t._v("--keyring-backend")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("os")]),t._v(" "),e("td",[t._v("Select keyring's backend")])]),t._v(" "),e("tr",[e("td",[t._v("--ledger")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("Use a connected Ledger device")])]),t._v(" "),e("tr",[e("td",[t._v("--memo")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Memo to send along with transaction")])]),t._v(" "),e("tr",[e("td",[t._v("--node")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("tcp://localhost:26657")]),t._v(" "),e("td",[t._v("specifies "),e("code",[t._v("<host>:<port>")]),t._v(" for the Tendermint RPC interface endpoint for this chain")])]),t._v(" "),e("tr",[e("td",[t._v("--offline")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Offline mode (does not allow any online functionality)")])]),t._v(" "),e("tr",[e("td",[t._v("--sequence")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("Sequence number to sign the tx")])]),t._v(" "),e("tr",[e("td",[t._v("--sign-mode")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Choose sign mode (direct | amino-json), this is an advanced feature")])]),t._v(" "),e("tr",[e("td",[t._v("--trust-node")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("Don't verify proofs for responses")])]),t._v(" "),e("tr",[e("td",[t._v("--yes")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("Skip tx broadcasting prompt confirmation")])]),t._v(" "),e("tr",[e("td",[t._v("--chain-id")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("The network Chain ID")])]),t._v(" "),e("tr",[e("td",[t._v("--home")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("$HOME/.nibid")]),t._v(" "),e("td",[t._v("Directory for config and data")])]),t._v(" "),e("tr",[e("td",[t._v("--trace")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Print out full stack trace on errors")])])])]),t._v(" "),e("h3",{attrs:{id:"module-commands"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#module-commands"}},[t._v("#")]),t._v(" Module Commands")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[e("strong",[t._v("Subcommand")])]),t._v(" "),e("th",[e("strong",[t._v("Description")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("RouterLink",{attrs:{to:"/dev/x/perp.html#cli"}},[t._v("perp")])],1),t._v(" "),e("td",[t._v("Perp subcommands for querying and opening positions, etc.")])]),t._v(" "),e("tr",[e("td",[e("RouterLink",{attrs:{to:"/dev/x/vpool.html#cli"}},[t._v("vpool")])],1),t._v(" "),e("td",[t._v("Vpool subcommands for querying vpools.")])])])])])}),[],!1,null,null,null);v.default=n.exports}}]);