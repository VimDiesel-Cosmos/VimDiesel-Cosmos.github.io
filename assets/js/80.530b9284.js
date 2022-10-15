(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{644:function(t,a,e){"use strict";e.r(a);var s=e(0),o=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"submitting-proposals"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#submitting-proposals"}},[t._v("#")]),t._v(" Submitting Proposals")]),t._v(" "),e("p",{attrs:{synopsis:""}},[t._v("This section describes how to submit governance proposals on Nibiru.")]),t._v(" "),e("p",[t._v("Any NIBI holder, whether bonded or unbonded, can submit proposals by sending a "),e("code",[t._v("TxGovProposal")]),t._v(" transaction. This is possible using the "),e("code",[t._v("nibid")]),t._v(" CLI. Each proposal type corresponds to a subcommand of "),e("code",[t._v("nibid tx gov submit-proposal")]),t._v(".")]),t._v(" "),e("h4",{attrs:{id:"table-of-contents"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[t._v("#")]),t._v(" Table of Contents")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#submitting-proposals"}},[t._v("Submitting Proposals")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#proposal-types"}},[t._v("Proposal Types")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#whitelisting-an-oracle-address-with-add-oracle"}},[t._v("Whitelisting an oracle address with "),e("code",[t._v("add-oracle")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#create-a-virtual-pool"}},[t._v("Create a virtual pool")])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#querying-a-proposal"}},[t._v("Querying a proposal")])])])])]),t._v(" "),e("h2",{attrs:{id:"proposal-types"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#proposal-types"}},[t._v("#")]),t._v(" Proposal Types")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Proposal Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("add-oracle")])]),t._v(" "),e("td",[t._v("Whitelists an account as a price feed, enabling it send "),e("code",[t._v("post-price")]),t._v(" messages.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("cancel-software-upgrade")])]),t._v(" "),e("td",[t._v("Cancels a software upgrade.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("community-pool-spend")])]),t._v(" "),e("td",[t._v("Details a proposal for use of community funds, together with how many coins are proposed to be spent, and to which recipient account.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("create-pool")])]),t._v(" "),e("td",[t._v("Creates a new Nibi-Perps trading pair by initializing a virtual AMM pool.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("ibc-upgrade")])]),t._v(" "),e("td",[t._v("Updates the IBC client state in-place. An "),e("code",[t._v("upgraded_client_state.json")]),t._v(" can be client-breaking.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("param-change")])]),t._v(" "),e("td",[t._v("Change module parameters.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("software-upgrade")])]),t._v(" "),e("td",[t._v("Upgrade the protocol code.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("update-client")])]),t._v(" "),e("td",[t._v("Substitutes the current IBC client for a new one. This proposal is useful for updating the light client in the case of misbehavior. See "),e("a",{attrs:{href:"https://ibc.cosmos.network/main/architecture/adr-026-ibc-client-recovery-mechanisms.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ADR-026 of IBC-Go"),e("OutboundLink")],1),t._v(" for more info.")])])])]),t._v(" "),e("h3",{attrs:{id:"whitelisting-an-oracle-address-with-add-oracle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#whitelisting-an-oracle-address-with-add-oracle"}},[t._v("#")]),t._v(" Whitelisting an oracle address with "),e("code",[t._v("add-oracle")])]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBwYXJhbWV0ZXJzCm5pYmlkIHR4IGdvdiBzdWJtaXQtcHJvcG9zYWwgYWRkLW9yYWNsZSBbcHJvcG9zYWwtZmlsZV0gLS1kZXBvc2l0IFtkZXBvc2l0XSBbZmxhZ3NdCgojIGV4YW1wbGUKbmliaWQgdHggZ292IHN1Ym1pdC1wcm9wb3NhbCBhZGQtb3JhY2xlIC9wYXRoL3RvL3Byb3Bvc2FsLmpzb24gLS1kZXBvc2l0IDEwMDB1bmliaSAtLWZyb20gdmFsaWRhdG9yCg=="}}),t._v(" "),e("p",[t._v("An JSON file the "),e("code",[t._v("add-oracle")]),t._v(" proposal:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogJnF1b3Q7dGl0bGUmcXVvdDs6ICZxdW90O2FkZCBEZWxwaGkgb3JhY2xlJnF1b3Q7LAogJnF1b3Q7ZGVzY3JpcHRpb24mcXVvdDs6ICZxdW90O1doaXRlbGlzdHMgRGVscGhpIHRvIHBvc3QgcHJpY2VzIGZvciBCVEMmcXVvdDssCiAmcXVvdDtvcmFjbGVzJnF1b3Q7OiBbJnF1b3Q7bmliaTF6YWF2dnp4ZXowZWx1bmR0bjMycW5rOWxrbThrbWNzejQ0Zzd4bCZxdW90O10sCiAmcXVvdDtwYWlycyZxdW90OzogWyZxdW90O3VidGM6dW51c2QmcXVvdDtdCn0K"}}),t._v(" "),e("h3",{attrs:{id:"create-a-virtual-pool"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-a-virtual-pool"}},[t._v("#")]),t._v(" Create a virtual pool")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBwYXJhbWV0ZXJzCm5pYmlkIHR4IGdvdiBzdWJtaXQtcHJvcG9zYWwgY3JlYXRlLXBvb2wgcHJvcG9zYWxGaWxlIC0tZGVwb3NpdCBkZXBvc2l0IFtmbGFnc10KCiMgZXhhbXBsZQpuaWJpZCB0eCBnb3Ygc3VibWl0LXByb3Bvc2FsIGNyZWF0ZS1wb29sIC9wYXRoL3RvL3Byb3Bvc2FsLmpzb24gLS1kZXBvc2l0IDEwMDB1bmliaSAtLWZyb20gdmFsaWRhdG9yCg=="}}),t._v(" "),e("p",[t._v("Here's an example of a valid JSON file for the "),e("code",[t._v("create-pool")]),t._v(" proposal.")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7dGl0bGUmcXVvdDs6ICZxdW90O0NyZWF0ZSB2cG9vbCBmb3IgQlRDOk5VU0QmcXVvdDssCiAgICAmcXVvdDtkZXNjcmlwdGlvbiZxdW90OzogJnF1b3Q7V2Ugd2FudCB0byBhbGxvdyBsZXZlcmFnZWQgQlRDIHBlcnAgdHJhZGluZy4mcXVvdDssCiAgICAmcXVvdDtwYWlyJnF1b3Q7OiAmcXVvdDt1YnRjOnVudXNkJnF1b3Q7LAogICAgJnF1b3Q7cXVvdGVfYXNzZXRfcmVzZXJ2ZSZxdW90OzogJnF1b3Q7MTAwMDAwMCZxdW90OywKICAgICZxdW90O2Jhc2VfYXNzZXRfcmVzZXJ2ZSZxdW90OzogJnF1b3Q7MTAwMDAwMCZxdW90OywKICAgICZxdW90O3RyYWRlX2xpbWl0X3JhdGlvJnF1b3Q7OiAmcXVvdDswLjEmcXVvdDssCiAgICAmcXVvdDtmbHVjdHVhdGlvbl9saW1pdF9yYXRpbyZxdW90OzogJnF1b3Q7MC4wMSZxdW90OywKICAgICZxdW90O21heF9vcmFjbGVfc3ByZWFkX3JhdGlvJnF1b3Q7OiAmcXVvdDswLjEmcXVvdDssCiAgICAmcXVvdDttYWludGVuYW5jZV9tYXJnaW5fcmF0aW8mcXVvdDs6ICZxdW90OzAuMDYyNSZxdW90Owp9Cg=="}}),t._v(" "),e("h2",{attrs:{id:"querying-a-proposal"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#querying-a-proposal"}},[t._v("#")]),t._v(" Querying a proposal")]),t._v(" "),e("p",[t._v("One can use the following command to query for proposals:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBwYXJhbWV0ZXJzCm5pYmlkIHF1ZXJ5IGdvdiBwcm9wb3NhbCBbcHJvcG9zYWwtaWRdCgojIGV4YW1wbGUKbmliaWQgcXVlcnkgZ292IHByb3Bvc2FsIDEK"}})],1)}),[],!1,null,null,null);a.default=o.exports}}]);