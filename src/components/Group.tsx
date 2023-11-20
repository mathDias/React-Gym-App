import { Text , Pressable, IPressableProps} from 'native-base';

type Props = IPressableProps & {
  name: string;
  isActive: boolean
}

export function Group({ name , isActive, ...rest}: Props) {
  return (
    <Pressable {...rest} mr={3} w={24} h={10} bg={"gray.600"} rounded={'md'} justifyContent={'center'} alignItems={'center'} overflow={'hidden'} 
        _pressed={{
            borderWidth: 1,
            borderColor: 'green.500'
        }}
        isPressed={isActive}
    >
        <Text
        color= {isActive ? 'green.600' : "gray.200"}
        textTransform="uppercase"
        fontSize="xs"
        fontWeight="bold"
        
        >
        {name}
        </Text>
    </Pressable>
  );
}