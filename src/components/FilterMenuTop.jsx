import CostButton from "./CostButton";
import InputField from "./InputField";

const FilterMenuTop = ({ inputSearch, setInputSearch }) => {
  const costs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="FilterMenuTop">
      <InputField
        inputSearch={inputSearch}
        setInputSearch={setInputSearch}
      ></InputField>

      <div className="buttonBorder1">
        <div className="buttonBorder2">
          {costs.map((cost, id) => {
            return (
              <CostButton key={id} id={id}>
                {cost}
              </CostButton>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterMenuTop;
