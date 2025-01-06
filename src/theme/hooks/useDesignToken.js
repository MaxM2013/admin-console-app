import { theme } from 'antd';
import { useMemo } from 'react';

export function useDesignToken() {
  const { token } = theme.useToken();
  return useMemo(() => token, [token]);
}