import { NavigationContainer } from '@react-navigation/native';
import Home from './component/Home.component';
import { createDrawerNavigator } from '@react-navigation/drawer';
import colors from './component/colors';
import Settings from './component/settings.component';
import { ChartDonut, Gear, HandCoins, House, Invoice } from '@phosphor-icons/react';
import { useState } from 'react';
import Transaction from './component/transaction.component';
import Dashboard from './component/dashboard.conponent';

const Drawer = createDrawerNavigator();

export default function App() {
    const [categoryList, setCategoryList]= useState([]);


  const addItem =(item) =>{
    const newList = [...categoryList, item];
    setCategoryList(newList);
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Dashboard' 
        screenOptions={{
          drawerStyle: {
            backgroundColor: colors.PURPLE, // لون خلفية قائمة السحب
          },
          drawerLabelStyle: {
            color: colors.WHITE, // لون النصوص في القائمة
            fontSize:16
          },
          headerStyle: {
            backgroundColor: colors.BLACK, // لون خلفية الهيدر
          },
          headerTintColor: colors.WHITE,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 15,
          },
        }}>
        <Drawer.Screen name="Home" component={Home} options={{
          drawerIcon:()=>(
            <House size={20} color={colors.WHITE} />
          ),
          headerRight: () => (
              <House size={20} color={colors.WHITE}  style={{ marginRight: 15 }} />            
          ),
        }}/>
        <Drawer.Screen name="Dashboard" component={Dashboard} options={{
          drawerIcon:()=>(
            <ChartDonut size={20} color={colors.WHITE }  />
          ),
          headerRight:()=>(
            <ChartDonut size={20} color={colors.WHITE}  style={{ marginRight: 15 }}/>
          )
        }}/>

        <Drawer.Screen name="Transaction" component={Transaction}  
        options={{
          drawerIcon:()=>(
            <HandCoins size={20} color={colors.WHITE} />          
          ),
          headerRight:()=>(
            <HandCoins size={20} color={colors.WHITE}  style={{ marginRight: 15 }}/>          
          )
        }}/>

        <Drawer.Screen name="Settings" component={Settings}  options={{
          drawerIcon:()=>(
            <Gear size={20} color={colors.WHITE} />
          ),
          headerRight:()=>(
            <Gear size={20} color={colors.WHITE}  style={{ marginRight: 15 }}/>

          )
        }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


