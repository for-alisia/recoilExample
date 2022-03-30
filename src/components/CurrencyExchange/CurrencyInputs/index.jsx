import { useRecoilState } from 'recoil';
import { usdAtom, eurSelector } from '../currency.atoms';
import { InputNumber } from 'antd';
import { SwapOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const Currency = styled.form`
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CurrencyInputs = () => {
  const [usd, setUsd] = useRecoilState(usdAtom);
  const [eur, setEur] = useRecoilState(eurSelector);

  const usdChangeHandler = (value) => {
    if (value && !isNaN(value)) {
      setUsd(value);
    }
  };

  const eurChangeHandler = (value) => {
    if (value && !isNaN(value)) {
      setEur(value);
    }
  };

  return (
    <Currency>
      <InputNumber addonBefore="USD" addonAfter="$" value={usd} onChange={usdChangeHandler} />
      <SwapOutlined />
      <InputNumber addonBefore="EUR" addonAfter="€" value={eur} onChange={eurChangeHandler} />
    </Currency>
  );
};

export default CurrencyInputs;
