import { useRecoilState } from 'recoil';
import { isComissionEnabledAtom, comissionAtom } from '../../recoil/currency.atoms';
import { Checkbox, InputNumber } from 'antd';
import styled from 'styled-components';

const Comission = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ComissionInput = () => {
  const [isComissionEnabled, setIsComissionEnabled] = useRecoilState(isComissionEnabledAtom);
  const [comission, setComission] = useRecoilState(comissionAtom);

  const checkboxHandler = ({ target: { checked } }) => {
    setIsComissionEnabled(checked);
  };

  const comissionChangeHandler = (value) => {
    if (value && !isNaN(value)) {
      setComission(value);
    }
  };

  return (
    <Comission>
      <Checkbox checked={isComissionEnabled} onChange={checkboxHandler}>
        Include comission
      </Checkbox>
      <InputNumber
        disabled={!isComissionEnabled}
        value={comission}
        addonAfter="%"
        onChange={comissionChangeHandler}
      />
    </Comission>
  );
};

export default ComissionInput;
