document.addEventListener("DOMContentLoaded", function () {
  Highcharts.chart("barChart", {
    chart: {
      type: "bar",
    },
    title: {
      text: "Bar Chart",
    },
    xAxis: {
      categories: [
        "Category 1",
        "Category 2",
        "Category 3",
        "Category 4",
        "Category 5",
      ],
    },
    yAxis: {
      title: {
        text: "Value",
      },
    },
    series: [
      {
        name: "Series 1",
        data: [10, 20, 30, 40, 50],
      },
    ],
  });
  // Line Graph
  Highcharts.chart("lineGraph", {
    chart: {
      type: "line",
    },
    title: {
      text: "Line Graph",
    },
    xAxis: {
      categories: [
        "Category 1",
        "Category 2",
        "Category 3",
        "Category 4",
        "Category 5",
      ],
    },
    yAxis: {
      title: {
        text: "Value",
      },
    },
    series: [
      {
        name: "Series 1",
        data: [10, 20, 30, 40, 50],
      },
    ],
  });

  // Pie Graph
  Highcharts.chart("pieGraph", {
    chart: {
      type: "pie",
    },
    title: {
      text: "Pie Graph",
    },
    series: [
      {
        name: "Data",
        data: [
          ["Category 1", 10],
          ["Category 2", 20],
          ["Category 3", 30],
          ["Category 4", 40],
          ["Category 5", 50],
        ],
      },
    ],
  });

  // Donut Chart
  Highcharts.chart("donutChart", {
    chart: {
      type: "pie",
    },
    title: {
      text: "Donut Chart",
    },
    plotOptions: {
      pie: {
        innerSize: "50%",
      },
    },
    series: [
      {
        name: "Data",
        data: [
          ["Category 1", 10],
          ["Category 2", 20],
          ["Category 3", 30],
          ["Category 4", 40],
          ["Category 5", 50],
        ],
      },
    ],
  });

  // Multiline Graph
  Highcharts.chart("multilineGraph", {
    chart: {
      type: "line",
    },
    title: {
      text: "Multiline Graph",
    },
    xAxis: {
      categories: [
        "Category 1",
        "Category 2",
        "Category 3",
        "Category 4",
        "Category 5",
      ],
    },
    yAxis: {
      title: {
        text: "Value",
      },
    },
    series: [
      {
        name: "Series 1",
        data: [10, 20, 30, 40, 50],
      },
      {
        name: "Series 2",
        data: [20, 30, 40, 50, 60],
      },
    ],
  });
});
