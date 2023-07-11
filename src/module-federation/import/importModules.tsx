import React, {lazy} from 'react'
import {RemoteFactory} from "../containers/RemoteFactory";


const WeatherBlockModuleLazy = lazy(async () => await import('Weather/WeatherBlock'))

export const IncubatorLabsModule = (props:any) => RemoteFactory(<WeatherBlockModuleLazy {...props} />)