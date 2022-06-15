import { ViewProps } from 'react-native'
import { DataResponse } from '../../../../api/types/app'

export interface IUserCard extends ViewProps {
  user: DataResponse.Sumbmission
  index: number
}
