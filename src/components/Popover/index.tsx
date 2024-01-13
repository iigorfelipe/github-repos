import { Dispatch, MouseEvent, SetStateAction, useState } from 'react';
import Popover from '@mui/material/Popover';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Check } from '@mui/icons-material';
import * as C from './styles';

type Option = {
  option: string;
  check: boolean;
};

type PropsPopover = {
  title: string;
  label: string;
  options: Option[];
  setOptions: Dispatch<SetStateAction<{ option: string; check: boolean; }[]>>;
};

const BasicPopover= ({  title, label, options, setOptions }: PropsPopover) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOptionClick = (option: string) => {

    options.forEach((item) => {
      if (item.option === option) {
        item.check = true
      } else {
        item.check = false
      };
    });

    setOptions(options)
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <C.Button
        aria-describedby={id}
        onClick={handleClick}
      >
        {title}
        <ArrowDropDownIcon />
      </C.Button>
  
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{mt: '10px'}}
      >
        <C.WrapperContent>

          <C.HeaderContent>
            <C.LabelContent>
              {label}
            </C.LabelContent>
            <C.CloseIconContent onClick={handleClose}>
              x
            </C.CloseIconContent>
          </C.HeaderContent>

          <C.WrapperOptionContent>

            {
              options.map(({ option, check }) => (
                <C.OptionsContent
                  key={option}
                  onClick={() => handleOptionClick(option)}      
                >
                  <C.WrapperCheckContent>
                    {check && <Check sx={{width: '100%', height: '100%'}} />}
                  </C.WrapperCheckContent>

                  <C.OptionContent>{option}</C.OptionContent>
                </C.OptionsContent>
              ))
            }
  
          </C.WrapperOptionContent>
        </C.WrapperContent>
      </Popover>
    </>
  );
};

export default BasicPopover;
