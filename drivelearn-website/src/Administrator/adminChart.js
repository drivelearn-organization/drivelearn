import "./../../node_modules/react-vis/dist/style.css";
import {XYPlot, LineSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines} from 'react-vis';

const Chart = () => {

    const data = [
      {x:1, y:8},
      {x:2, y:5},
      {x:3, y:4},
      {x:4, y:9},
      {x:5, y:1},
      {x:6, y:3},
      {x:7, y:2},
      {x:8, y:1},
      {x:9, y:8},
      {x:10, y:8},
      {x:11, y:0},
      {x:12, y:0},
    ]

    return(
        <div styley={{marginTop: '15px'}}>
            <XYPlot height={400} width={500}>
                <VerticalGridLines/>
                <HorizontalGridLines/>
                <XAxis/>
                <YAxis/>
                <LineSeries data={data} color="red"/>
                <LineSeries data={data} color="Green"/>
                <LineSeries data={data} color="Yellow"/>
            </XYPlot>

        </div>
    )

}

export default Chart;