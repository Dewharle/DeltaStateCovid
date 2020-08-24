class NavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `\
   <nav>
        <div style="overflow-x:auto">
            <div class="nav-div"> 
                <a class="nav-link" href="./index.html">Home</a>
            </div>
            <div class="nav-div">
                <a class="nav-link" href="./index/file.html">Covid Update</a>
            </div>
            
            <div id="subMenu" class="dropdown">
                <div class="dropdownMenu nav-div2">Performance Barometer 
                </div>
                <div id="menuList" class="menuList">
                    <a class="active btn" href="./index/lgaBreakdown.html">Local Government Area Breakdown</a>
                    <a class="btn" href="./index/UpdateHome.html"> Update Home </a>
                    <a class="btn" href="./index/PerformanceBarometer.html"> Performance Barometer </a>
                    <a class="btn" href="./index/CasesManaged.html"> CASE MANAGEMENT </a>
                    <a class="btn" href="./index/HoldingCentres.html"> Holding Centre </a>
                </div>
            </div>
            <div id="subMenu2" class="dropdown">
                <div class="dropdownMenu nav-div2">Covid
                </div>
                <div id="menuList2" class="menuList">
                    <a class="active btn" href="./index/cases_snapshot.html">Case Snapshot </a>
                    <a class="btn" href="./index/hotline_education.html"> Hotline Education </a>
                    <a class="btn" href="./index/laboratory_tests.html"> Laboratory Tests </a>
                    <a class="btn" href="./index/summary_case.html"> Summary Case </a>
                </div>
            </div>
        </div>
   </nav>
        `;
    }
}

customElements.define("main-header", NavBar);
const toggleMenu = () => {
    const menuList1 = document.getElementById("menuList");
    const menuList2 = document.getElementById("menuList2");
    menuList1.classList.toggle("show");
    menuList2.classList.remove("show");
};
const toggleMenu2 = () => {
    const menuList2 = document.getElementById("menuList2");
    const menuList1 = document.getElementById("menuList");
    menuList2.classList.toggle("show");
    menuList1.classList.remove("show");
};
const subMenu = document.getElementById("subMenu");
subMenu.addEventListener("click", toggleMenu);

const subMenu2 = document.getElementById("subMenu2");
subMenu2.addEventListener("click", toggleMenu2);