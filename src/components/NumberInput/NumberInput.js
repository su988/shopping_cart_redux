import { useNumberInput, HStack, Button, Input } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import {
  increaseQuantity,
  decreaseQuantity,
} from '../../state/actions/cartActions';

export const NumberInput = ({ quantity, id }) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: quantity,
      min: 1,
    });
  const dispatch = useDispatch();

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps({ isReadOnly: true });

  return (
    <HStack maxW="150px">
      <Button {...dec} onClick={() => dispatch(decreaseQuantity(id))}>
        -
      </Button>
      <Input {...input} />
      <Button {...inc} onClick={() => dispatch(increaseQuantity(id))}>
        +
      </Button>
    </HStack>
  );
};
