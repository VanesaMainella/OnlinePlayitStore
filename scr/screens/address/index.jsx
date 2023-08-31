import { View, Text, Button } from 'react-native';
import { styles } from './styles';
import { LocationSelector } from '../../components';
import { useEffect, useState } from 'react';
import { GOOGLE_API_KEY, URL_BASE_GEOCODING} from '../../constants/maps';
import {useUpdateAddressMutation} from '../../store/settings/api';
import { useSelector } from 'react-redux';


const Address = ({navigation}) => {

  const localId= useSelector((state)=> state.auth.user.localId);
  const [location, setLocation] = useState (null);
  const [address, setAddress] = useState (null);
  const [updateAddress] = useUpdateAddressMutation();


  const onLocation= async ({lat, lng}) => {
    setLocation({lat, lng});
  };

  const onHandlerUpdateLocation = () => {
    updateAddress({localId, address, location});
    navigation.navigate('Settings');
  };

  useEffect(()=> {
    if (location){
      const getGeoCoding = async() => {
        const response = await fetch (`${URL_BASE_GEOCODING}/json?latlng=${location.lat},${location.lng}&key=${GOOGLE_API_KEY}`);
        const data =await response.json();

        if (!data.results){
          throw new Error('Something went wrong!');
        }
        const address = data.results[0].formatted_address;

        setAddress(address);
      };
      getGeoCoding();
    }
  }, [location]);

  return (
    <View style={styles.container}>
      <LocationSelector onLocation={onLocation}/>
      <Button title= "Confirm" onPress={onHandlerUpdateLocation}/>
    </View>
  );
};

export default Address;