// Our labels along the x-axis
Chart.defaults.global.defaultFontColor = "#000";

var LGA = [
  "Aniocha North",
  "Aniocha South",
  "Bomadi",
  "Burutu",
  "Ethiope East",
  "Ethiope West",
  "Ika NorthEast",
  "Ika South",
  "Isoko North",
  "Isoko South",
  "Ndokwa East",
  "Ndokwa West",
  "Okpe",
  "Oshimili North",
  "Oshimili South",
  "Patani",
  "Sapele",
  "Udu",
  "Ughelli North",
  "Ughelli South",
  "Ukwuani",
  "Uvwie",
  "Warri North",
  "Warri South",
  "Warri SouthWest",
];
// Our labels along the x-axis
var TreatmentCentre = [
  "Asaba Specialist Hospital (Treatment Center)",
  "Asaba Specialist Hospital (Home care)",
  "Federal Medical Centre, Asaba (Treatment Center)",
  "Federal Medical Centre, Asaba (Home care)",
  "Delta State University Teaching Hospital, Oghara (Treatment Center)",
  "Delta State University Teaching Hospital, Oghara  (Home care)",
  "Central Hospital, Warri (Treatment Center)",
  "Central Hospital, Warri (Home care)",
];
var TCCM = [184, 100, 58, 110, 54, 61, 62, 146];
var CCCBM = [2, 4, 0, 13, 4, 2, 1, 7];
var TD = [170, 96, 50, 97, 44, 59, 59, 139];
var TDeaths = [12, 0, 8, 0, 6, 0, 2, 0];

var NTTHC = [0, 0, 0, 0, 0, 0, 0, 0];
var AB = [17, "", 12, "", 12, "", 13];

var ALS = [9, "", 12, "", 16, "", 11];

var ctx2 = document.getElementById("CaseManagement");
var mChart = new Chart(ctx2, {
  type: "horizontalBar",
  data: {
    labels: TreatmentCentre,
    datasets: [
      {
        data: TCCM,
        label: "Total Confirmed Cases Managed",
        backgroundColor: "#e6194b",
        fill: false,
      },
      {
        data: CCCBM,
        label: "Confirmed Cases Currently being Managed.",
        backgroundColor: "#3cb44b",
        fill: false,
      },
      {
        data: TD,
        label: "Total Discharged",
        backgroundColor: "#0000FF",
        fill: false,
      },
      {
        data: TDeaths,
        label: "Total Deaths",
        backgroundColor: "#FF0000",
        fill: false,
      },
      {
        data: NTTHC,
        label: "Number Transferred to Home Care (New)",
        backgroundColor: "#FFFF00",
        fill: false,
      },
      {
        data: AB,
        label: "Available Bed(s)",
        backgroundColor: "#FF7F00",
        fill: false,
      },
      {
        data: ALS,
        label: "Average Length of Stay - last 10 discharges",
        backgroundColor: "#9400D3",
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});

const n = moment().format("h:mma, Do MMM, YYYY"); // August
document.getElementById("今天").innerHTML = n;
chart.canvas.parentNode.style.height = "128px";
chart.canvas.parentNode.style.width = "128px";

var LGA = [
  "Aniocha North",
  "Aniocha South",
  "Bomadi",
  "Burutu",
  "Ethiope East",
  "Ethiope West",
  "Ika NorthEast",
  "Ika South",
  "Isoko North",
  "Isoko South",
  "Ndokwa East",
  "Ndokwa West",
  "Okpe",
  "Oshimili North",
  "Oshimili South",
  "Patani",
  "Sapele",
  "Udu",
  "Ughelli North",
  "Ughelli South",
  "Ukwuani",
  "Uvwie",
  "Warri North",
  "Warri South",
  "Warri SouthWest",
];
// For drawing the lines
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: LGA,

    datasets: [
      {
        label: "Total Persons Tested",
        data: [
          15,
          45,
          21,
          1,
          71,
          265,
          70,
          108,
          15,
          66,
          8,
          116,
          127,
          474,
          1862,
          3,
          344,
          179,
          341,
          47,
          21,
          442,
          5,
          516,
          4,
        ],
        backgroundColor: [
          "#f9d56e",
          "#f9d56e",
          "#f9d56e",
          "#f9d56e",
          "#f9d56e",
          "#f9d56e",
          "#f9d56e",
          "#f9d56e",
          "#f9d56e",
          "#f9d56e",
          "#f9d56e",
          "#f9d56e",
          "#f9d56e",
          "#f9d56e",
          "#f9d56e",
          "#f9d56e",
          "#f9d56e",
          "#f9d56e",
          "#f9d56e",
          "#f9d56e",
          "#f9d56e",
          "#f9d56e",
          "#f9d56e",
          "#f9d56e",
          "#f9d56e",
        ],
      },
      {
        label: "Tests per 100,000 population",
        data: [
          10,
          23,
          17,
          0,
          25,
          93,
          27,
          46,
          7,
          20,
          6,
          55,
          71,
          285,
          885,
          3,
          141,
          90,
          76,
          16,
          13,
          167,
          3,
          118,
          2,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
        ],
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});
