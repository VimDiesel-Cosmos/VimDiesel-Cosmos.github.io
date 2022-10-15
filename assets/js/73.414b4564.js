(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{637:function(e,t,a){"use strict";a.r(t);var n=a(0),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"python-sdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python-sdk"}},[e._v("#")]),e._v(" Python SDK")]),e._v(" "),a("p",{attrs:{synopsis:""}},[e._v("Python-based client for interacting with the Nibiru blockchain.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("nibiru")]),e._v(" package allows you to index, query, and send transactions on the Nibiru Blockchain using Python. It provides access to market data for analysis, visualization, indicator development, algorithmic trading, strategy backtesting, bot programming, and related software engineering.")]),e._v(" "),a("p",[e._v("The package is intended to be used by coders, developers, technically-skilled traders and  data-scientists for building trading algorithms.")]),e._v(" "),a("h2",{attrs:{id:"user-guidelines"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-guidelines"}},[e._v("#")]),e._v(" User Guidelines")]),e._v(" "),a("h3",{attrs:{id:"installation-from-pypi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-from-pypi"}},[e._v("#")]),e._v(" Installation from "),a("code",[e._v("PyPI")])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"cGlwIGluc3RhbGwgbmliaXJ1ICAjIHJlcXVpcmVzIFB5dGhvbiAzLjcK"}}),e._v(" "),a("p",[e._v("You may need to update "),a("code",[e._v("pip")]),e._v(" to get this to run:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"cHl0aG9uIC1tIHBpcCBpbnN0YWxsIC0tdXBncmFkZSBwaXAK"}}),e._v(" "),a("h3",{attrs:{id:"documentation-website"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#documentation-website"}},[e._v("#")]),e._v(" Documentation Website")]),e._v(" "),a("p",[e._v("Documentation can be found here: "),a("a",{attrs:{href:"https://nibiru-py.readthedocs.io/en/latest/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nibiru-py documentation"),a("OutboundLink")],1)]),e._v(" "),a("ul",[a("li",[e._v("Learn more about opening and managing your spot and perp positions "),a("a",{attrs:{href:"https://nibiru-py.readthedocs.io/en/latest/nibiru.sdks.tx.html#nibiru-sdks-tx-package",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Learn about querying the chain using the Sdk "),a("a",{attrs:{href:"https://nibiru-py.readthedocs.io/en/latest/nibiru.clients.html#nibiru-clients-package",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1)])]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"development-guidelines"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#development-guidelines"}},[e._v("#")]),e._v(" Development Guidelines")]),e._v(" "),a("p",[e._v("Our recommended setup is "),a("code",[e._v("pyenv")]),e._v(" in combination with "),a("code",[e._v("poetry")]),e._v(".")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("pyenv")]),e._v(" is a tool for installing and managing Python interpreters. This will let you seamlessly switch between Python versions.")]),e._v(" "),a("li",[a("code",[e._v("poetry")]),e._v(" is used for managing virtual environments, dependency resolution, package installations, package building, and package publishing.")]),e._v(" "),a("li",[e._v("We assume you're on a Unix machine such as WSL2 Ubuntu, MacOS, or a common Linux distro.")])]),e._v(" "),a("p",[e._v("Currently, "),a("code",[e._v("nibiru")]),e._v(" is created with Python 3.9.13. It may be compatible with higher versions, but we only run end-to-end tests in 3.9.13.")]),e._v(" "),a("h3",{attrs:{id:"setting-up-a-professional-dev-environment-with-pyenv-and-poetry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-a-professional-dev-environment-with-pyenv-and-poetry"}},[e._v("#")]),e._v(" Setting up a professional dev environment with "),a("code",[e._v("pyenv")]),e._v(" and "),a("code",[e._v("poetry")])]),e._v(" "),a("h4",{attrs:{id:"pyenv-for-managing-multiple-python-interpreters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pyenv-for-managing-multiple-python-interpreters"}},[e._v("#")]),e._v(" Pyenv for managing multiple Python interpreters")]),e._v(" "),a("p",[e._v("If you're on MacOS or a common Linux distro, you can install "),a("code",[e._v("pyenv")]),e._v(" with brew.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"YnJldyBpbnN0YWxsIHB5ZW52Cg=="}}),e._v(" "),a("p",[e._v("You'll then need to add the following snippet to your shell config, e.g. your "),a("code",[e._v(".bash_profile")]),e._v(", "),a("code",[e._v(".bashrc")]),e._v(", or "),a("code",[e._v(".zshrc")]),e._v(".")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"ZXhwb3J0IFBZRU5WX1JPT1Q9JnF1b3Q7JEhPTUUvLnB5ZW52JnF1b3Q7CmV4cG9ydCBQQVRIPSZxdW90OyRQWUVOVl9ST09UL2JpbjokUEFUSCZxdW90OwpldmFsICZxdW90OyQocHllbnYgaW5pdCAtKSZxdW90OwpldmFsICZxdW90OyQocHllbnYgaW5pdCAtLXBhdGgpJnF1b3Q7Cg=="}}),e._v(" "),a("p",[e._v("After using "),a("code",[e._v("source")]),e._v(" on your config or restarting the shell, you should have the "),a("code",[e._v("pyenv")]),e._v(" root command.")]),e._v(" "),a("p",[e._v("The command use to install any version of python is "),a("code",[e._v("pyenv install")]),e._v(". Display additional info for this command with "),a("code",[e._v("pyenv install --help")]),e._v(".")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"cHllbnYgaW5zdGFsbCAzLjkuMTMgIyBleGFtcGxlIGZvciBuaWJpcnUK"}}),e._v(" "),a("p",[e._v("Once you have a version installed, you can print out the versions on your machine with:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"cHllbnYgdmVyc2lvbnMK"}}),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"IyBleGFtcGxlIG91dHB1dAogIHN5c3RlbQoqIDMuOS4xMyAoc2V0IGJ5IC9ob21lL3JlYWx1Ly5weXRob24tdmVyc2lvbikKICAzLjEwLjQK"}}),e._v(" "),a("p",[e._v("In this example, I have 2 different interpreters installed on my machine. The one with the "),a("code",[e._v("*")]),e._v(" is currently set as my "),a("strong",[e._v("global interpreter")]),e._v(". This is set manually using the "),a("code",[e._v("pyenv global")]),e._v(" command.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"cHllbnYgZ2xvYmFsIDMuMTAuNCAgICMgc3dpdGNoZXMgdGhlIGdsb2JhbCBpbnRlcnByZXRlciB0byAzLjEwLjQK"}}),e._v(" "),a("p",[e._v("You can verify this works as expected using "),a("code",[e._v("python --version")]),e._v(". You may be familiar with using "),a("code",[e._v("python3")]),e._v(" as the command instead of "),a("code",[e._v("python")]),e._v(". With "),a("code",[e._v("pyenv")]),e._v(", this is not necessary.")]),e._v(" "),a("p",[e._v("Additional usage and installation instructions can be found in the "),a("a",{attrs:{href:"https://github.com/pyenv/pyenv",target:"_blank",rel:"noopener noreferrer"}},[e._v("pyenv repo"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"installing-poetry-for-dependency-resolution-and-publishing-packages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-poetry-for-dependency-resolution-and-publishing-packages"}},[e._v("#")]),e._v(" Installing "),a("code",[e._v("poetry")]),e._v(" for dependency resolution and publishing packages")]),e._v(" "),a("p",[e._v("Reference: "),a("a",{attrs:{href:"https://python-poetry.org/docs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Poetry docs"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Poetry can be installed with both "),a("code",[e._v("curl")]),e._v(" and "),a("code",[e._v("pip")]),e._v(". We recommended using "),a("code",[e._v("curl")]),e._v(" so that it will be global to your machine.")]),e._v(" "),a("p",[e._v("NOTE We highly, highly, highly recommend that you DO NOT use "),a("code",[e._v("brew")]),e._v(" to install "),a("code",[e._v("poetry")]),e._v(".\nIf you use "),a("code",[e._v("brew")]),e._v(", it's going to install directly to your system, which prevents you from being able to leverage "),a("code",[e._v("pyenv")]),e._v(" to seamlessly switch between Python interpreters.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"IyBpbnN0YWxsYXRpb24gd2l0aCBwaXA6IHJlY29tbWVuZGVkIG9wdGlvbiBpbiB0YW5kZW0gd2l0aCBweWVudgpwaXAgaW5zdGFsbCBwb2V0cnkK"}}),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"IyBGb3IgVU5JWCBzeXN0ZW1zIC0gaW5zdGFsbGF0aW9uIHdpdGggY3VybApjdXJsIC1zU0wgaHR0cHM6Ly9pbnN0YWxsLnB5dGhvbi1wb2V0cnkub3JnLyB8IHB5dGhvbiAtCg=="}}),e._v(" "),a("p",[e._v("After this installation command, add the "),a("code",[e._v("poetry")]),e._v(" binary to the path in your shell config (if it's not done automatically).")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"ZXhwb3J0IFBBVEg9JFBBVEg6JEhPTUUvLnBvZXRyeS9iaW4K"}}),e._v(" "),a("h3",{attrs:{id:"installing-external-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-external-dependencies"}},[e._v("#")]),e._v(" Installing external dependencies")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("nibiru")]),e._v(" project is defined by its "),a("code",[e._v("pyproject.toml")]),e._v(". At the root of the repo, simply call:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"cG9ldHJ5IGluc3RhbGwK"}}),e._v(" "),a("p",[e._v("This will resolve dependencies between each of the project's packages and install them into a virtual environment.")]),e._v(" "),a("h2",{attrs:{id:"running-tests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-tests"}},[e._v("#")]),e._v(" Running tests")]),e._v(" "),a("h4",{attrs:{id:"setting-environment-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-environment-variables"}},[e._v("#")]),e._v(" Setting environment variables")]),e._v(" "),a("p",[e._v('There\'s currently a "devnet" running in GCP that the CI workflows use. You can find these secrets at '),a("a",{attrs:{href:"https://www.notion.so/nibiru/Resources-and-Repo-Configs-b31aa8074a2b419d80b0c946ed5efab0",target:"_blank",rel:"noopener noreferrer"}},[e._v("this notion page"),a("OutboundLink")],1),e._v(" if you have access to it or contact one of the "),a("code",[e._v("CODEOWNERS")]),e._v(" (@Unique-Divine, @matthiasmatt, @nibiruheisenberg).\nThis is useful so that you can run every part of the package code without needing to visit other repositories.")]),e._v(" "),a("p",[e._v("Set up a "),a("code",[e._v(".env")]),e._v(" file to set environment variables for the tests.\nThe variables used in the CI build can be found in the "),a("code",[e._v("env")]),e._v(" section of the "),a("a",{attrs:{href:".github/workflows/pytests.yml"}},[a("code",[e._v("pytests.yml")]),e._v(" workflow")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"yaml",base64:"am9iczoKICB0ZXN0czoKICAgIGVudjoKICAgICAgIyBodHRwczovL3d3dy5ub3Rpb24uc28vbmliaXJ1L1Jlc291cmNlcy1hbmQtUmVwby1Db25maWdzLWIzMWFhODA3NGEyYjQxOWQ4MGIwYzk0NmVkNWVmYWIwCiAgICAgIENIQUlOX0lEOiAke3sgc2VjcmV0cy5DSEFJTl9JRCB9fQogICAgICBIT1NUOiAke3sgc2VjcmV0cy5IT1NUIH19CiAgICAgIFZBTElEQVRPUl9NTkVNT05JQzogJHt7IHNlY3JldHMuVkFMSURBVE9SX01ORU1PTklDIH19CiAgICAgIEdSUENfUE9SVDogJHt7IHNlY3JldHMuR1JQQ19QT1JUIH19CiAgICAgIExDRF9QT1JUOiAke3sgc2VjcmV0cy5MQ0RfUE9SVCB9fQo="}}),e._v(" "),a("p",[e._v("You'll need an "),a("code",[e._v(".env")]),e._v(" configuration like this.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"IyBFeGFtcGxlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBOaWJpcnkgUHl0aG9uIFNESwpIT1NUPSZxdW90Oy4uLiZxdW90OwpWQUxJREFUT1JfTU5FTU9OSUM9JnF1b3Q7Li4uJnF1b3Q7Ck9SQUNMRV9NTkVNT05JQz0mcXVvdDsuLi4mcXVvdDsKR1JQQ19QT1JUPSZxdW90Oy4uLiZxdW90OwpMQ0RfUE9SVD0mcXVvdDsuLi4mcXVvdDsKQ0hBSU5fSUQ9JnF1b3Q7Li4uJnF1b3Q7Ck5FVFdPUktfSU5TRUNVUkU9dHJ1ZQo="}}),e._v(" "),a("h4",{attrs:{id:"running-the-tests-with-poetry-pytest"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-the-tests-with-poetry-pytest"}},[e._v("#")]),e._v(" Running the tests with "),a("code",[e._v("poetry")]),e._v(" + "),a("code",[e._v("pytest")])]),e._v(" "),a("p",[e._v("After following the instructions for setting up "),a("code",[e._v("poetry")]),e._v(", you can run the tests with "),a("code",[e._v("poetry run pytest")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"cG9ldHJ5IHJ1biBweXRlc3QgLXAgbm86d2FybmluZ3MgIyBzaWxlbmNlcyB3YXJuaW5ncwo="}}),e._v(" "),a("h4",{attrs:{id:"option-b-install-the-nibiru-package-with-pip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#option-b-install-the-nibiru-package-with-pip"}},[e._v("#")]),e._v(" (option B). Install the "),a("code",[e._v("nibiru")]),e._v(" package with "),a("code",[e._v("pip")])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"IyBmcm9tIGxvY2FsCiMgYnVpbGQgYW5kIGluc3RhbGwKcGlwIGluc3RhbGwgLgoKIyBmcm9tIGxvY2FsIGJ1aWxkCnBpcCB1bmluc3RhbGwgbmliaXJ1CnBpcCBpbnN0YWxsIG5pYmlydSAtLW5vLWluZGV4IC0tZmluZC1saW5rcyAvcGF0aC90by9uaWJpcnUvcHktc2RrL2Rpc3QKCiMgZnJvbSBweXBpCnBpcCB1bmluc3RhbGwgbmliaXJ1CnBpcCBpbnN0YWxsIG5pYmlydQo="}}),e._v(" "),a("h2",{attrs:{id:"makefile-and-protocol-buffers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#makefile-and-protocol-buffers"}},[e._v("#")]),e._v(" Makefile and Protocol Buffers")]),e._v(" "),a("p",[e._v("See the "),a("a",{attrs:{href:"https://github.com/NibiruChain/sdk-proto-gen",target:"_blank",rel:"noopener noreferrer"}},[e._v("NibiruChain/sdk-proto-gen repository"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"generating-types-wth-protobuf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generating-types-wth-protobuf"}},[e._v("#")]),e._v(" Generating types wth protobuf")]),e._v(" "),a("p",[e._v("The objective is to run "),a("code",[e._v("make proto-gen")]),e._v(", which simply executes "),a("code",[e._v("scripts/protocgen.sh")]),e._v(".")]),e._v(" "),a("p",[e._v("In order to do this, you'll need to install a few packages on your system.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"cHl0aG9uIC1tIHBpcCBpbnN0YWxsIC0tdXNlciBncnBjaW8tdG9vbHMKcGlwIGluc3RhbGwgbXlweS1wcm90b2J1Zgo="}}),e._v(" "),a("p",[e._v("If you get a permissions error such as")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"cm06IGNhbm5vdCByZW1vdmUgJ3Byb3RvL3Byb3RvL2Vwb2Nocy9xdWVyeS5wcm90byc6IFBlcm1pc3Npb24gZGVuaWVkCg=="}}),e._v(" "),a("p",[e._v("call "),a("code",[e._v("sudo chown -R [USER-NAME] proto")]),e._v(" using the name of user directory.\nYou can find the value for "),a("code",[e._v("[USER-NAME]")]),e._v(" quickly by running "),a("code",[e._v("whoami")]),e._v(". In other words, this should work:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"c3VkbyBjaG93biAtUiAkKHdob2FtaSkgcHJvdG8K"}}),e._v(" "),a("p",[e._v("You're done generating types once you've successfully called")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"bWFrZSBwcm90by1nZW4KcG9ldHJ5IGJ1aWxkICMgZXF1aXZhbGVudGx5LCB5b3UgY2FuIHJ1biBgcHl0aG9uIC1tIGJ1aWxkYAo="}}),e._v(" "),a("h2",{attrs:{id:"linting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linting"}},[e._v("#")]),e._v(" Linting")]),e._v(" "),a("p",[e._v("Enable git hook which will perform linting before each commit:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"cG9ldHJ5IHJ1biBwcmUtY29tbWl0IGluc3RhbGwK"}}),e._v(" "),a("p",[e._v("This will keep your code clean.")]),e._v(" "),a("h2",{attrs:{id:"gotchas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gotchas"}},[e._v("#")]),e._v(" Gotchas")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("protobuf")]),e._v(" package must be version 3.20.x or lower. Otherwise, the following error appears at runtime.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"bmliaXJ1L2NsaWVudHMvX19pbml0X18ucHk6MTogaW4gJmx0O21vZHVsZSZndDsKICAgIGZyb20gbmliaXJ1LmNsaWVudHMuZGV4IGltcG9ydCBEZXggICMgbm9xYQpuaWJpcnUvY2xpZW50cy9kZXgucHk6ODogaW4gJmx0O21vZHVsZSZndDsKICAgIGZyb20gbmliaXJ1LnByb3RvLmRleC52MSBpbXBvcnQgcXVlcnlfcGIyIGFzIGRleF90eXBlCm5pYmlydS9wcm90by9kZXgvdjEvcXVlcnlfcGIyLnB5OjE2OiBpbiAmbHQ7bW9kdWxlJmd0OwogICAgZnJvbSBnb29nbGUuYXBpIGltcG9ydCBhbm5vdGF0aW9uc19wYjIgYXMgZ29vZ2xlX2RvdF9hcGlfZG90X2Fubm90YXRpb25zX19wYjIKLi4vLi4vLi4vYW5hY29uZGEzL2VudnMvZGl2aW5lL2xpYi9weXRob24zLjkvc2l0ZS1wYWNrYWdlcy9nb29nbGUvYXBpL2Fubm90YXRpb25zX3BiMi5weTozMDogaW4gJmx0O21vZHVsZSZndDsKICAgIGZyb20gZ29vZ2xlLmFwaSBpbXBvcnQgaHR0cF9wYjIgYXMgZ29vZ2xlX2RvdF9hcGlfZG90X2h0dHBfX3BiMgouLi8uLi8uLi9hbmFjb25kYTMvZW52cy9kaXZpbmUvbGliL3B5dGhvbjMuOS9zaXRlLXBhY2thZ2VzL2dvb2dsZS9hcGkvaHR0cF9wYjIucHk6NDg6IGluICZsdDttb2R1bGUmZ3Q7CiAgICBfZGVzY3JpcHRvci5GaWVsZERlc2NyaXB0b3IoCi4uLy4uLy4uL2FuYWNvbmRhMy9lbnZzL2RpdmluZS9saWIvcHl0aG9uMy45L3NpdGUtcGFja2FnZXMvZ29vZ2xlL3Byb3RvYnVmL2Rlc2NyaXB0b3IucHk6NTYwOiBpbiBfX25ld19fCiAgICBfbWVzc2FnZS5NZXNzYWdlLl9DaGVja0NhbGxlZEZyb21HZW5lcmF0ZWRGaWxlKCkKRSAgIFR5cGVFcnJvcjogRGVzY3JpcHRvcnMgY2Fubm90IG5vdCBiZSBjcmVhdGVkIGRpcmVjdGx5LgpFICAgSWYgdGhpcyBjYWxsIGNhbWUgZnJvbSBhIF9wYjIucHkgZmlsZSwgeW91ciBnZW5lcmF0ZWQgY29kZSBpcyBvdXQgb2YgZGF0ZSBhbmQgbXVzdCBiZSByZWdlbmVyYXRlZCB3aXRoIHByb3RvYyAmZ3Q7PSAzLjE5LjAuCkUgICBJZiB5b3UgY2Fubm90IGltbWVkaWF0ZWx5IHJlZ2VuZXJhdGUgeW91ciBwcm90b3MsIHNvbWUgb3RoZXIgcG9zc2libGUgd29ya2Fyb3VuZHMgYXJlOgpFICAgIDEuIERvd25ncmFkZSB0aGUgcHJvdG9idWYgcGFja2FnZSB0byAzLjIwLnggb3IgbG93ZXIuCkUgICAgMi4gU2V0IFBST1RPQ09MX0JVRkZFUlNfUFlUSE9OX0lNUExFTUVOVEFUSU9OPXB5dGhvbiAoYnV0IHRoaXMgd2lsbCB1c2UgcHVyZS1QeXRob24gcGFyc2luZyBhbmQgd2lsbCBiZSBtdWNoIHNsb3dlcikuCkUKRSAgIE1vcmUgaW5mb3JtYXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9uZXdzLzIwMjItMDUtMDYjcHl0aG9uLXVwZGF0ZXMK"}}),e._v(" "),a("h2",{attrs:{id:"usage-instructions-for-publishing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-instructions-for-publishing"}},[e._v("#")]),e._v(" Usage instructions for publishing.")]),e._v(" "),a("p",[e._v("You specify updates to publish using the commit (or PR) title with "),a("code",[e._v("bump-[version-keyword]")]),e._v(".\nFor the "),a("code",[e._v("poetry version")]),e._v(" command, ysing any bump rule with a valid semver string will change the version inside "),a("code",[e._v("pyproject.toml")]),e._v(". For example,")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"cG9ldHJ5IHZlcnNpb24gcGF0Y2ggIyBtb3ZlcyBmcm9tIHgueS4xNCB0byB4LnkuMTUKcG9ldHJ5IHZlcnNpb24gbWlub3IgIyBtb3ZlcyBmcm9tIHguNS56IHRvIHguNi4wCnBvZXRyeSB2ZXJzaW9uIG1ham9yICMgbW92ZXMgZnJvbSAzLnkueiB0byA0LjAuMAo="}}),e._v(" "),a("p",[e._v("The list of bump rules includes:\npatch, minor, major, prepatch, preminor, premajor, prerelease.")]),e._v(" "),a("p",[e._v("So the list of available keywords you an put in a PR includes")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("bump-patch")]),e._v(":")]),e._v(" "),a("li",[a("code",[e._v("bump-patch")]),e._v(": 0.0.0 → 0.0.1")]),e._v(" "),a("li",[a("code",[e._v("bump-minor")]),e._v(": 0.0.* → 0.1.0")]),e._v(" "),a("li",[a("code",[e._v("bump-major")]),e._v(": 0."),a("em",[e._v(".")]),e._v(" → 1.0.0")]),e._v(" "),a("li",[a("code",[e._v("bump-prepatch")]),e._v(": 0.0.0 → 0.0.1-alpha0")]),e._v(" "),a("li",[a("code",[e._v("bump-prerelease")]),e._v(": equivalent to "),a("code",[e._v("bump-prepatch")])]),e._v(" "),a("li",[a("code",[e._v("bump-preminor")]),e._v(": 0.0.* → 0.1.0-alpha0")]),e._v(" "),a("li",[a("code",[e._v("bump-premajor")]),e._v(": 0."),a("em",[e._v(".")]),e._v(" → 1.0.0-alpha0")])]),e._v(" "),a("p",[e._v("These guidelines are in the release.yml for future reference.")])],1)}),[],!1,null,null,null);t.default=o.exports}}]);