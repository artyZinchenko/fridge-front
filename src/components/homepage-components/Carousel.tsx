import { useState } from 'react';
import CarouselCard from './CarouselCard';
import carouselData from '../../data/carouselData';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Button } from '@mui/material';
import { styled } from '@mui/material';

const StyledBox = styled(Box)({
  padding: '1em',
});

const StyledPaper = styled(Paper)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Carousel = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const maxSteps = carouselData.length;

  const handleNext = () => {
    const nextStep = activeStep + 1;
    setActiveStep(nextStep);
  };

  const handleBack = () => {
    const backStep = activeStep - 1;
    setActiveStep(backStep);
  };

  const { img, title, description } = carouselData[activeStep];

  return (
    <StyledPaper elevation={2}>
      <StyledBox>
        <CarouselCard imgName={img} title={title} description={description} />
        <MobileStepper
          steps={maxSteps}
          position='static'
          activeStep={activeStep}
          nextButton={
            <Button
              size='small'
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              size='small'
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              <KeyboardArrowLeft />
              Back
            </Button>
          }
        />
      </StyledBox>
    </StyledPaper>
  );
};

export default Carousel;
