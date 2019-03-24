const weather = require('./weather通用模块')

weather.queryWeather(101010300,(result)=>{
  console.log(result.weatherinfo);
})

/*
{ city: '朝阳',
  cityid: '101010300',
  temp: '28.4',
  WD: '东南风',
  WS: '小于3级',
  SD: '27%',
  AP: '1002.6hPa',
  njd: '暂无实况',
  WSE: '<3',
  time: '17:55',
  sm: '1.7',
  isRadar: '1',
  Radar: 'JC_RADAR_AZ9010_JB' }
*/