# WeatherAppAndroidRN
expo 환경에서 소스와 다름


1. 프로젝트 생성 :  
	react-native init WeatherApp
2. Device 연결 : LG G6 

3. 어플리케이션 작성(변경) : 
	App.js
	Weather.js

4. assets 디렉토리 생성

	cd .../WeatherApp/android/app/src/main,  mkdir assets

5. 라이브러리 추가 : 선택사항... 해당 어플에 필요한 라이브러리를 추가하면 됨


LinearGradient 를 사용하려면 아래와 같이 라이브러리를 추가
npm install react-native-linear-gradient --save
react-native link react-native-linear-gradient

Weather.js 를 아래와 같이 수정해야함
//import {LinearGradient} from "expo";
import LinearGradient from 'react-native-linear-gradient';


Vector Icons 를 아래와 같이 설치하면 날씨 아이콘을 사용할 수 있음
-- npm install @expo/vector-icons --save
-- expo 환경에서만 가능하면 아래와 같이  react-native-vector-icons 를 사용

-> npm install react-native-vector-icons --save 로 변경
react-native link react-native-vector-icons

빌드 전에 위치정보에 대한 권한 설정이 필요하다.
-> AndroidManifest.xml  -> ACCESS_FINE_LOCATION 권한 추가

   <!-- Add location by gus -->
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />


6. 빌드

	react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

7. 프로젝트 실행

	react-native run-android
