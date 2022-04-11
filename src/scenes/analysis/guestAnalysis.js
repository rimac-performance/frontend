import React from "react";
import AnalysisScreen from "./index";

/*const GuestAnalysisScreenOld = () => {
  const navigate = useNavigate();
  const params = useParams();
  const run_id = params.run_id;
  const [range, setRange] = useState([0, 20]);
  const [data, loading] = useAnalysisData(run_id);
  const [tab, setTab] = useState("chart");

  console.log("run_id", run_id);

  const handleTimerChange = (newValue) => {
    setRange(newValue);
  };

  const ShowCharts = () => {
    return (
      <div>
        <div className="timer">
          <Timer
            min={parseInt(data[0].time.slice(11, 13))}
            max={parseInt(data[data.length - 1].time.slice(11, 13)) + 1}
            onChange={handleTimerChange}
          />
        </div>

        <Odometer />
        <VCUVehicleST />
        <CoolantInOut data={data} range={range} />

        {charts.map((chart) => (
          <Chart
            key={chart.row}
            row={chart.row}
            label={chart.label}
            data={data}
            range={range}
            graphLabel={chart.graphLabel}
          />
        ))}
      </div>
    );
  };

  return (
    <div className={"container"}>
      <div style={{ height: 24 }} />
      <div className="imageContainer">
        <img className="logo" src={RevLogo} alt="Rev Performance" />
      </div>
      <div className="header">
        <h1>ANALYSIS</h1>
      </div>
      <div className="guest__ad">
        <p>
          Like what you see?{" "}
          <span
            className="guest__link"
            onClick={() => {
              navigate("../create");
            }}
          >
            Click here
          </span>{" "}
          to create your own Rev account!
        </p>
      </div>
      {!loading && (
        <div>
          <Chips
            text1={"Chart"}
            text2={"Tabular"}
            selected={tab}
            onClick={(text) => setTab(text)}
          />
          {tab.toLowerCase() === "chart" ? (
            <ShowCharts />
          ) : (
            <Table data={data} />
          )}
          <div style={{ marginBottom: 200 }} />
        </div>
      )}
    </div>
  );
};*/

const GuestAnalysisScreen = () => {
  return <AnalysisScreen guest={true} />;
};

export default GuestAnalysisScreen;
