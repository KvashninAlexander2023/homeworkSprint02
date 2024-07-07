import React from 'react'
import { Slider, SliderProps, SliderThumb, styled } from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return <SliderThumbFix 
        components={{ Thumb: AirbnbThumbComponent }}
        {...props}
    />
    // return (
    //     <Slider
    //         sx={{ // стили для слайдера // пишет студент
    //             width: "150px", padding: '30px 0', color: '#00CC22',  marginRight:"5px",
    //             "& .MuiSlider-thumb": {
    //                 height: 18,
    //                 width: 18,
    //                 backgroundColor: "white",
    //                 border: "1px solid currentColor",
    //                 "&:hover": {
    //                     boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
    //                 },
    //             },
    //             "& .airbnb-bar": {
    //                 height: 9,
    //                 width: 9,
    //                 backgroundColor: "currentColor",
    //                 marginLeft: 1,
    //                 marginRight: 1,
    //               },
    //             "& .MuiSlider-track": {
    //                 height: 4,
                    
    //             },
    //             "& .MuiSlider-rail": {
    //                 height: 4,
    //                 color:"#8B8B8B",
                    
    //             },
    //         }}
            
    //         {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
            

    //     />
    // )
}

export default SuperRange
//getAriaLabel Принимает функцию, возвращающую строковое значение, предоставляющее понятное имя для текущего значения ползунка

interface SliderThumbComponentProps extends React.HTMLAttributes<unknown> {}

function AirbnbThumbComponent(props: SliderThumbComponentProps) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}

const SliderThumbFix = styled(Slider)(({ theme }) => ({
    width: "150px", padding: '30px 0', color: '#00CC22',  marginRight:"5px",
    "& .MuiSlider-thumb": {
        height: 18,
        width: 18,
        backgroundColor: "white",
        border: "1px solid currentColor",
        "&:hover": {
            boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
        },
    },
    "& .airbnb-bar": {
        height: 6,
        width: 6,
        borderRadius: 25,
        backgroundColor: "currentColor",
        marginLeft: 1,
        marginRight: 1,
      },
    "& .MuiSlider-track": {
        height: 4,
        
    },
    "& .MuiSlider-rail": {
        height: 4,
        color:"#8B8B8B",
        
    },
    }
  ));