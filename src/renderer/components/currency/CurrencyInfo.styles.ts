import { Row } from 'antd'
import Text from 'antd/lib/typography/Text'
import styled from 'styled-components'
import { palette } from 'styled-theme'

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 100%;
  border-left: 1px solid currentColor;
  padding-left: 18px;
  text-transform: uppercase;

  &:before,
  &:after {
    content: ' ';
    position: absolute;
    left: -5px;
    background-color: currentColor;
    height: 10px;
    width: 10px;
    border-radius: 50%;
  }

  &:before {
    top: -5px;
  }

  &:after {
    bottom: -5px;
  }
`

export const DropdownContentWrapper = styled(Row)`
  justify-content: space-between;
  padding-right: 0;
  align-items: center;
  width: 100%;
  cursor: pointer;
`

export const SlipLabel = styled(Text)`
  text-transform: uppercase;
  padding: 0;
  font-size: 16px;
  font-family: 'MainFontRegular';
  cursor: pointer;
  color: ${palette('gray', 2)};
  &:hover {
    color: ${palette('text', 0)};
  }
`

export const SlipTolerancePercent = styled(Text)<{ slippage: 'true' | 'false' }>`
  color: ${(slippage) => (slippage === 'true' ? palette('error', 0) : palette('gray', 2))};
`

export const SlipToleranceText = styled(Text)`
  color: ${palette('gray', 2)};
`
