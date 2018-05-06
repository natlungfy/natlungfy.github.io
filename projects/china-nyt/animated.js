Plotly.d3.csv('https://raw.githubusercontent.com/natlungfy/datasets/master/similar_words_new.csv', function (err, data) {
// Create a lookup table 
var lookup = {};
function getData(year) {
  var byYear, trace;
  if (!(trace = lookup[year])) {
    trace = lookup[year] = {
      x: [],
      y: [],
      text: []
    };
  }
  return trace;
}

for (var i = 0; i < data.length; i++) {
  var datum = data[i];
  var trace = getData(datum.year);
  trace.x.push(datum.x);
  trace.y.push(datum.y);
  trace.text.push(datum.word);
}


// // Get the group names:
var years = Object.keys(lookup);

// // Create the main traces, one for each year:
var traces = [];
for (i = 0; i < years.length; i++) {
  var yearStr = years[i].toString()
  var data = lookup[years[i]];
  traces.push({
    name: yearStr,
    x: data.x.slice(),
    y: data.y.slice(),
    text: data.text.slice(),
    textposition: 'top right',
    textfont: {
      family: 'sans serif',
      size: 18,
      color: '#000'
    },
    mode: 'markers+text'
  });
}

// Create a frame for each year.
var frames = [];
for (i = 0; i < years.length; i++) {
  var yearStr = years[i].toString()
  frames.push({
    name: yearStr,
    data: years.map(function (year) {
      return getData(years[i]);
    })
  })
}

// Create slider steps, one for each frame.
var sliderSteps = [];
for (i = 0; i < years.length; i++) {
  var yearStr = years[i].toString()
  sliderSteps.push({
    method: 'animate',
    label: yearStr,
    args: [[yearStr], {
      mode: 'immediate',
      transition: {duration: 300},
      frame: {duration: 300, redraw: false},
    }]
  });
}

var layout = {
  xaxis: {
    title: 'x',
    range: [-250, 250]
  },
  yaxis: {
    title: 'y',
    range: [-400,400]

  },
  showlegend: false,
  paper_bgcolor: 'rgba(0,0,0,0)',
  plot_bgcolor: 'rgba(0,0,0,0)',
  hovermode: 'closest',
  updatemenus: [{
    x: 0,
    y: 0,
    yanchor: 'top',
    xanchor: 'left',
    showactive: false,
    direction: 'left',
    type: 'buttons',
    pad: {t: 87, r: 10},
    buttons: [{
      method: 'animate',
      args: [null, {
        mode: 'immediate',
        fromcurrent: true,
        transition: {duration: 300},
        frame: {duration: 2000, redraw: false}
      }],
      label: 'Play'
    }, {
      method: 'animate',
      args: [[null], {
        mode: 'immediate',
        transition: {duration: 0},
        frame: {duration: 0, redraw: false}
      }],
      label: 'Pause'
    }]
  }],

  sliders: [{
    pad: {l: 130, t: 55},
    currentvalue: {
      visible: true,
      prefix: 'Year:',
      xanchor: 'right',
      font: {size: 20, color: '#666'}
    },
    steps: sliderSteps
  }]
};

// Create the plot:
Plotly.plot('myDiv', {
  data: traces,
  layout: layout,
  frames: frames,
});
});