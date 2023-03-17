window.addEventListener('load', function () {
	const type = window.location.pathname.split("/")[1];
	function addStyle(ele, name) {
		name.split(" ").forEach((cls) => { ele.classList.add(cls) })
	};
	if (type === "p") {
		const toolbar = document.querySelector('[data-lookup="view-page-toolbar"]').firstChild;
		var image = chrome.runtime.getURL('assets/img/dl1.png');
		button1 = document.createElement("a");
		button1.setAttribute("title", "");
		button1.setAttribute("data-lookup", "viewpage-embed-button");
		button1.setAttribute("data-placement", "bottom");
		button1.setAttribute("data-toggle", "tooltip");
		addStyle(button1, "Styles__ToolbarButtonBase-sc-1dyyumc-0 Styles__ActionButton-sc-1dyyumc-2 Styles__RoundActionButton-sc-1dyyumc-4 dl-button");
		button1.setAttribute("data-original-title", "Download");
		button1.innerHTML = `<img id="dl-icon" src="${image}" style="width: 42px; height:42px;"alt="Download">`;
		try {
			toolbar.append(button1);
		} catch (err) {
			console.log(err);
		};
		button1.onclick = function () { genDL() };
	}
});

window.addEventListener('load', function () {
	$.notify.addStyle("bootstrap", {
		html: "<div>\n<span data-notify-text></span>\n</div>",
		classes: {
			base: { "z-index": "99999", "font-size": "20px", "font-family": "Segoe UI, Frutiger, Dejavu Sans, Helvetica Neue, Arial, sans-serif", "padding": "10px 17px 10px 16px", "text-shadow": "0 1px 0 rgba(18, 18, 18, 0.5)", "color": "#EAEAEA", "background-color": "#101010", "border": "2px solid #161616", "border-radius": "10px", "white-space": "nowrap", "padding-left": "46px", "background-repeat": "no-repeat", "background-position": "8px 8px" },
			error: { "color": "#E84A48", "background-color": "#260D0D", "border-color": "#331111", "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAS1SURBVFhH7Vffb1RFFP5m7u7tD9mubTFp2oiGGkLEJtXgCw8WSH8FG2JiDPTBHwnqky22QnzyxfigoVIp6j/APyCRByhNEDUmWgKNJj4gRVtD0xAtrQu1e3f3jt+Ze3fdu7vQ8mBsSL9kdu49M3PON+ecOXMXG9jAgwYV9mvGYme3dEkNbNdKtcgzldSy9wyQMsbczAG/PDwx/rtMvF+smdBfAZHHtcILcaU7HKW3+8a0UEMirhT4jKwxaUepm1R6bcX3J3PGnK6bGP/OKlgjViW0uLdTOoc4VKXUGwqqLaZVlQhJADRqySiScmSi0iBpK9dQ03/7uS8yxozQY/OyZjXck1DolcaY1h9WaX1AGZOgcktkNTCccNmIHOd/7xkzkDh/7rIdvAfuSuhWQGZzjdafu1q/mPV9LWTuF0KMnpVNTKeNOUhSl8KhiqhIaG73XuncRtcdYU4M5ENTgO9zJZcGHihHhfFqrUXHj8yt/cyrmVBcBh6WKP7o7IEbi+t6130prvUrQiNCJsczJIbEaCWPybhAxmROiDSfGfo2hv79VHevzcFKKCNUQ1tsLTFJYKWSoqiAbBa6uRnxV1+G3vEksLISJeV5UMk6xPv74ezaRUIkF47LL8Ou6PH9MaDXCitADkYBpmcfeKQV1ezjbgYyvu8UzJGYemQz3OEhxHp7oVtb4f/6G8zcHBCjiUwGqo5kXj+E+MEDcJ7aAXPjBswsy1EYPtHFjVZzi/q91ie+/GD6WujOfxHx0DJ3xLaJizq11m5ZEmsHqlZqIB+3bYP7zhB0eztM6jY9k0R84C3E+vrsOKoYFWlFyGuj/naSoovLEQ1ZsJN6LtxpikMlYFKa+Xl4x0bgX74SiOgld+gwYj3diB9m32VrFsyfC8iMnUTu4td2ndUbIszHJv62WUEJooRksjG1XPQY411+BB0H/vXrSI9+gtxkcHr11q1wjwwjtqfDvpuFBXhjY8ien7DvllARZJsspAnaaQ4kUURmCwE2l1dBsmLxk50yDGZ2Ft7HxwukVCJhx8zSEryPjiF34Stqce0GSiFVnadXTDUEkiii9NcBIoTEJ2wek3mJiRcIiyFeS6ehtmxhQg/DeXZnIE6l7JgktvvuUTh7dtsSUKhJRZDKzdMrphYCSRRRDwkJpZZZK2Z47AunogAakJypGnq7QEZyyhs5juyFi/ZdNTTAHRwsJHhxcRSIQZJK0Q7rRTmihIKkvkVal1RJMto61NQE9+gR6GeeDkTT0/BGTyB7bhyZE+zDRFaNDYgPDsDpeC4gVJSP3Kx08/z9yQpKELFayzrDdpsJPeH7viffORGwTpnl5eDx6lUm9ij8qSkm9Sab0JmTnyJ75owdl9DaVoS8NuqfouGfw9cISiwCd7p6pHuUN/wphq3jDq+LwiS5Olpa4PR0IffDJPwrU7w1qyXMwbhcHQ31iD3fB39mBrlvv6FLWMXDcdkgw7XIHH2tZvzsaSssQRkhuVwJ/ZBW/bwIP2NNSnrFeSCJKuEUWUnRs8hfvnmEoRdJteMYJvQppvubifGzUfeFKCMk+D8/P+6icZ19oOWxrj5h81hXH/nFWDd/g0rxX/9R3MAGHjAA/wAR5Ut0pCrRawAAAABJRU5ErkJggg==)" },
			success: { "color": "#1EC77D", "background-color": "#08331F", "border-color": "#062818", "background-image": "url(data:image/png;base64,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)" },
			info: { "color": "#3AA7AD", "background-color": "#0C1C23", "border-color": "#112833", "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAASWSURBVFhH7VdNiBxFFH7VVT0/OzPrhqxu2NG4g6e4G9BcDGoOLuhJ9Ka3IJ5cjeySg8khQdGjqyBmE0EQL4ogeBPcCCookajgQYmnuLNI/tZE9n9npqu6/F5tr3ZP9+wfC4GwH1R3Tf28+ep7r6pe0y52cadBRO8tYeD9f/jFc7tQ+oQQJW6w1i6heQbVxfqre7hpy9gSodqZWTytwrTHSHhPCKkGSfp9aCy7ASBCJrhhjb5ENvwubC1/L6Sv66N3R90bY1OEamfmyJL1oMQh8tSo8AtHrAnu91Te9aOPH7AmYBC/TBBi3F9WN39AmUDrj1PHetzYjbAhodrEHPsiB0VeEMo/TULey7OgAlFoolFt8CSGQ0jPA7tw2gaN8VxPZaLx9wxNj7KgndGRUPX0T5TrHyQyrTzcMiZU4XUYL1rTYoLRqFVhdMRLyTaDrJj0QUzN22DlHdlVejO4dY2mj/dHA9LwoncCXSMfUh5krG7kQOYoyJyCJEXInyAToviwcLgq6fH7JCnUw/+73VirWyjNbqHyr5mlxWOq3Ev737sRDUgjk1Df0PNsxBMy/xCkPwHLZTYcB/MyUOa5Az599myRPn66SEeHfFqBJ1OAaxFXJSFzJ0PdPCx9tykzkSI0MLFAsoBNo/IV7KIXIfcD7WQYLIQH/wz2eiRhRaF+aB985noyYKGn5/XBhce1bsraOZwQGUgREvgX3Vj04P+DMPAUx0FW8LpmvL+8rOnCFUM/XzP0+R8BSbfTMsCShlrB5qPKLwx3it4Ml8GgENgi9AhKzcUN/3sbuIXj59tpQyOTDXr5fIPOTxkqYGYHjSASL0HsRe3JToMShAbOLZKvipjjlYTwhuCyTHXWwDb3FAQVMSwHb+0timRQt8NtCOELIR8Mhe0a+CDttqRCiNLG3FWcbbYHZ0nVtcV2VRzc2gLXI9hdnzxTpE9RhgckLQer6mXD2RIkVa/Qul84xZJIEBLCIobZW5bvqG7XuA6YazknaH+3R9WKRxXUTTb/GHiAKCIKYD89OCOGtgZepOGFwjbXO6uzOSQIWYsY0HyQiGU85l3jjoMp2xWoC/tp+kmFpKTCXf0WvptFMF9xbRk7bPtwtiwZfdMqddV6aQclWuojZQr0CqaES9aGv7sLFBfljsEtzgbWmkueFcv1l9IndkYM4f6xlv12EWUKdxCaNozUTUE4Rewt1L7uFGwpQhYHiSqUQ5D4DVE66cisp9KaYX53+BMHVsdTGjYv6KDxTcYGc0gRqr9SIdNYRE7RXIDLPkKUXxYqF/WmwfcZ32Vr9Y5aCgwKDbLJ4F2l8mZqJPuCzVx6WDtApX0H4erWTaxsATf+MOTOxU9tJwge87h3f71uaPJPTb9cD2kpwFnGnXFwwib9JVzSbyDL/EI352nuq/GoM4n2qf+h/9RFyleHNkzQ+KrQ0YHLN35i44BxLEEbF/nSW2Z2/QStI6E11M7GUljpbyOFtUhhV972eypnWzMzVB/bZgobRyzJfxirHRN+Hkm+vj1Jfhyrn0HEl93t/QxqR9uH4j1QzhHaiQ/FXeziDgPRvzoC8nK9ik5zAAAAAElFTkSuQmCC)" },
			warn: { "color": "#D99853", "background-color": "#332B0B", "border-color": "#262008", "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAAOBSURBVFhH7VZLjwxRFP7Orep5ePQMQ7ySiRiPTCxkDIPEIyEkYjbSGcJMEBERjxDExs4PkHgMGzuJxB9AwgoLMdiRSBBLm1kg6JnuquM7VYXRUz2qe6u/zsntuo9zv/rOuecWGmiggf8NkrR1Q6+tsWY1bTrdPZNTIyXrqBcuaeuCDpOMwz60ercw3b8FDxeSobpRt0IRGaALOXcHTa4PIZ/K4SjK2C3Hnz+xwXpQv0KOS50bgkgPimRTDPh60kGP5/Ryb1Myq2bURUhv9lnTC1/2UOMcQo36o9aTLQxhIe6oHTUT0qu9QCloIZFBOOlGieooiSjbICLWzrGjDOncaEGNqImQnmkHPrwHct5aktlHRSRSpZkHrCVvM2JSnvTBc3v1Sk/NOVqbQkuXmuW56giTeT6K40BrHsGOiwgKV4BZnVSPp15kGm0IvrcsWZkZtRHyOd13m7jZAMaYxGEJml8A7VgBbVvGdglFKttpIyldx7kDOrzWT1ZnQmZCdGzhmM38OMuQtP5OZOaOqNVCqqUkaZXExhxbJwf4uCqalxHZFfK4gScFbrIV47ZxGiakzDhV8mQ5bUiH+zKXgUyE9AbVCXUR/56PT1TcPxkVAxY6EoJj+DIim0Kx/CdYd5ajXLGpmAtThiYe2wnjNtfJHObcab26piXpnRL/JJSo00PHh5I68wdGplSEOiPSzDB9Z1vhcowq+dKPJtmZ9EyJCUGfDD3YZY1gQ8dtEhqMQjARFj7Ph3ZthrbMhHv7iAS+cUWF2xxJBjpCxbbLyZHPSW8qplZofYdZP/NgR7R5JWzjoAR5cx/u1V3eZ18nkzFYNffErprDSU9VVCWk13mbB2Ge+hzj49xJ4TLYdeF8hOsPIdx2jtW6Le5LQ6i21ymmwOK4Ix2phFjySSYQlv8C32zj75pTiYC1p30RtLuAcOV+6LzuSLFUxBdvJ0N/Wq/3VhUifaCZxbXZX8hRHlnwbqhCyOWAL58gHx9CPtyDjL6LFEuFuQjVo+IDrOD2hZmKdEKWByKLGfMlfKP4OT76f5vPzcNxuCc34D24BPwYjfvS5kZG3zmZxe+oqtU7nZDdU2PBR/57xjcr8q14PyBINecCnrTYnJc+x4zBpJXp7zU/X17aNmkg7XQkH+8rOGMX324GHVXJVuKXlyqRjSD8KUmpPpaTL54mvQ000MD/DuAn3R4Ueh+VYR4AAAAASUVORK5CYII=)" }
		}
	});

	(() => {
		var div = document.querySelector('[data-lookup="viewer-container-toolbox"]');
		var ele = `<div class="Styles__CardBody-dot39s-2 bar-wrapper view-card-body"  style="display: none;">
        <div class="container-bar">
            <div
              class="progress-wrapper topmargin mx-auto"
              style="height: 20px; max-width: 600px"
            >
              <div
                class="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 0%"
              ></div>
            </div>
          </div>
    </div>`;
		div.insertAdjacentHTML('beforeend', ele);
	})();
});