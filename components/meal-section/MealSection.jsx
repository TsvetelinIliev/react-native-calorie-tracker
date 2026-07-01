import { styles } from "../../styles";
import {  Plus } from 'lucide-react-native';
import {TouchableOpacity,Text, View} from 'react-native';

export default function MealSection({
    onAddMeal,
}) {

    return (
        <View style={[styles.section, styles.mealSection]}>

            <Text>Meals</Text>

            <TouchableOpacity 

            hitSlop={10}
            onPress={onAddMeal} >

                <Plus />

            </TouchableOpacity>



        </View>



    );
}