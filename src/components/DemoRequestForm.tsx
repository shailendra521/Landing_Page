import React, { useState } from 'react';
import styled from 'styled-components';
import dropdown from '../assets/dropdown.png';
import AmarSlider from '../assets/AmarSlide.png';
import Bikanervala from '../assets/Bikandarvala.png';
import abp from '../assets/abp.png';
import flipkart from '../assets/Flipkart.png';
import Canon from '../assets/Canon.png';
import magicpin from '../assets/magicpn.png';
import CarrerLaunchers from '../assets/CarrerLaunchers.png';
import GetStartedArrow from '../assets/GetStartedArrow.png';

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 42px 0;
  background-color: #FFFFFF;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;

  form {
    padding: 0 44px;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 48.32px;
  color: #333;
  font-family: 'Clash Grotesk', sans-serif;
  line-height: 30px;
  letter-spacing: 0;
  padding: 0 44px;
`;

const FormGroup = styled.div`
  margin-bottom: 11px;
  position: relative;
`; 

const RequiredAsterisk = styled.span`
  color: #ff6b6b;
`;

const Label = styled.label<{ isFloating: boolean }>`
  position: absolute;
  left: 11px;
  color: #272727;
  font-family: 'Public Sans', sans-serif;
  font-weight: 300;
  font-size: 13.17px;
  transition: all 0.2s ease-out;
  background: white;
  padding: 0 0.3rem;
  pointer-events: none;
  
  ${props => props.isFloating ? `
    top: -0.5rem;
    font-size: 12px;
    color: #272727;
  ` : `
    top: 1rem;
    color: #272727;
  `}
`;

const ErrorMessage = styled.span`
  color: #ff6b6b;
  font-size: 12px;
  margin-top: 4px;
  display: block;
  font-family: 'Public Sans', sans-serif;
  padding-left: 12px;
`;

const Input = styled.input<{ hasError?: boolean }>`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${props => props.hasError ? '#ff6b6b' : '#E8E8E8'};
  border-radius: 3.29px;
  font-family: 'Public Sans', sans-serif;
  font-weight: 300;
  font-size: 13.17px;
  line-height: 17.56px;
  letter-spacing: 0;
  color: #272727;
  transition: all 0.2s ease-in-out;
  -webkit-tap-highlight-color: transparent;
  
  &:focus {
    outline: none;
    border-color: #E8E8E8;
    color: #272727;
  }

  &:focus + ${Label}, &:not(:placeholder-shown) + ${Label} {
    top: -0.5rem;
    font-size: 12px;
    color: #272727;
  }

  /* Remove blue background on autofill */
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
    -webkit-text-fill-color: #272727 !important;
    transition: background-color 5000s ease-in-out 0s;
  }
`;


const PhoneInputWrapper = styled.div<{ hasError?: boolean }>`
  position: relative;
  width: 100%;
  border: 1px solid ${props => props.hasError ? '#ff6b6b' : '#E8E8E8'};
  border-radius: 3.29px;
  background: white;
  height: 51px;
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:focus-within {
    border-color: #E8E8E8;
  }
`;

const CountryCode = styled.select`
  position: absolute;
  left: 11px;
  top: 50%;
  transform: translateY(-50%);
  padding-right: 1.5rem;
  border: none;
  background: white url(${dropdown}) no-repeat;
  background-position: right 0.5rem center;
  background-size: 12px;
  color: #272727;
  font-family: 'Public Sans', sans-serif;
  font-weight: 300;
  font-size: 13.17px;
  cursor: pointer;
  appearance: none;
  z-index: 1;
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: none;
  }

  /* Remove blue background on autofill */
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
    -webkit-text-fill-color: #272727 !important;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

const PhoneLabel = styled.label<{ isFloating: boolean }>`
  position: absolute;
  left: 4.4rem;
  color: #272727;
  font-family: 'Public Sans', sans-serif;
  font-weight: 300;
  font-size: 13.17px;
  transition: all 0.2s ease-out;
  background: white;
  // padding: 0 0.3rem;
  pointer-events: none;
  
  ${props => props.isFloating ? `
    top: -0.5rem;
    font-size: 12px;
  ` : `
    top: 50%;
    transform: translateY(-50%);
  `}
`;

const RequiredStar = styled.span`
  color: #ff6b6b;
  margin-left: 2px;
`;

const PhoneInput = styled(Input)`
  padding-left: 4.5rem;
  border: none;
  background: transparent;
  height: 100%;
  color: #272727;
  -webkit-tap-highlight-color: transparent;

  &:focus {
    border: none;
    outline: none;
    color: #272727;
  }

  &:focus ~ ${PhoneLabel}, &:not(:placeholder-shown) ~ ${PhoneLabel} {
    top: -0.5rem;
    font-size: 12px;
    transform: none;
    color: #272727;
  }

  /* Remove blue background on autofill */
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
    -webkit-text-fill-color: #272727 !important;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

const SelectWrapper = styled.div`
  position: relative;
  width: 100%;

  &:focus-within {
    border-color: #E8E8E8;
  }
`;

const ErrorLine = styled.div<{ show: boolean }>`
  width: 100%;
  height: 1px;
  background-color: #ff6b6b;
  margin-top: -1px;
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 0.2s ease-in-out;
`;

const SelectLabel = styled.label<{ isFloating: boolean }>`
  position: absolute;
  left: 11px;
  color: #272727;
  font-family: 'Public Sans', sans-serif;
  font-weight: 300;
  font-size: 13.17px;
  transition: all 0.2s ease-out;
  background: white;
  pointer-events: none;
  display: ${props => props.isFloating ? 'block' : 'none'};
  
  ${props => props.isFloating ? `
    top: -0.5rem;
    font-size: 12px;
  ` : `
    top: 50%;
    transform: translateY(-50%);
  `}
`;

const RedAsterisk = styled.span`
  color: #ff6b6b;
  display: inline;
`;

const CustomSelect = styled.div`
  position: relative;
  width: 100%;
`;

const StyledSelect = styled.select<{ hasError?: boolean; hasValue: boolean }>`
  width: 100%;
  padding-left: 9px;
  padding-top: 18px;
  padding-bottom: 18px;
  border: 1px solid #E8E8E8;
  border-radius: 3.29px;
  font-size: 13.17px;
  background: white url(${dropdown}) no-repeat;
  background-position: right 1rem center;
  background-size: 12px;
  appearance: none;
  font-family: 'Public Sans', sans-serif;
  font-weight: 300;
  color: ${props => props.hasValue ? '#272727' : '#757575'};
  transition: all 0.2s ease-in-out;
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: none;
    border-color: #E8E8E8;
  }

  option {
    color: #272727;
  }

  option:first-child {
    color: #757575;
  }

  /* Remove blue background on autofill */
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
    -webkit-text-fill-color: #272727 !important;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

const PlaceholderText = styled.div<{ isVisible: boolean }>`
  position: absolute;
  left: 9px;
  top: 18px;
  color: #272727;
  font-family: 'Public Sans', sans-serif;
  font-weight: 300;
  font-size: 13.17px;
  pointer-events: none;
  display: ${props => props.isVisible ? 'block' : 'none'};
`;

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #E65F46;
  color: white;
  border: none;
  border-radius: 3.29px;
  font-size: 1.25rem;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const BrandsSection = styled.div`
  margin-top: 3.875rem;
  text-align: center;
  overflow: hidden;
  padding: 20px 0;
  position: relative;
  margin-left: -44px;
  margin-right: -44px;
  width: calc(100% + 88px);

  @media (max-width: 600px) {
    margin-left: -44px;
    margin-right: -44px;
    width: calc(100% + 88px);
  }
`;

const BrandsTitle = styled.h2`
  font-family: 'Public Sans', sans-serif;
  font-weight: 800;
  font-size: 22px;
  line-height: 30px;
  letter-spacing: 0;
  text-align: center;
  margin-bottom: 2.5rem;
  color: #272727;
  padding: 0 44px;
`;

const BrandsGrid = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  padding: 20px 0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: translateZ(0);
  max-width: 100%;

  @media (max-width: 600px) {
    padding: 10px 0;
  }
`;

const BrandLogo = styled.img`
  width: auto;
  height: 40px;
  object-fit: contain;
  margin: 0 30px;
  opacity: 1;
  transition: all 0.3s ease;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: translateZ(0);
  -webkit-font-smoothing: subpixel-antialiased;
  
  @media (max-width: 600px) {
    height: 30px;
    margin: 0 20px;
  }
  
  &:hover {
    transform: translateZ(0) scale(1.05);
  }
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  animation: slide 5s linear infinite;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: translateZ(0);
  margin-bottom: 18px;
  will-change: transform;
  
  @media (max-width: 600px) {
    margin-bottom: 10px;
  }
  
  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  &:hover {
    animation-play-state: paused;
  }
`;

const ReverseSliderContainer = styled(SliderContainer)`
  animation: slideReverse 12s linear infinite;
  
  @keyframes slideReverse {
    0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

const StyledSpan = styled.span`
  font-family: 'Clash Grotesk', sans-serif;
  font-weight: 600;
  font-size: 19.75px;
  line-height: 100%;
  letter-spacing: 0;
`;

const SelectFieldsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

const DemoRequestForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    employees: '',
    state: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    phone: '',
    employees: '',
    state: ''
  });

  const [touched, setTouched] = useState({
    email: false,
    phone: false,
    employees: false,
    state: false
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return 'Email is required';
    if (!emailRegex.test(email)) return 'Please enter a valid email address';
    return '';
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[0-9]{10}$/;
    if (!phone) return 'Phone number is required';
    if (!phoneRegex.test(phone)) return 'Please enter a valid 10-digit phone number';
    return '';
  };

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'email':
        return validateEmail(value);
      case 'phone':
        return validatePhone(value);
      case 'employees':
        return !value ? 'Please select number of employees' : '';
      case 'state':
        return !value ? 'Please select your state' : '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is valid
    const error = validateField(name, value);
    if (!error) {
      setErrors(prev => ({ ...prev, [name]: '' }));
      setTouched(prev => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields on submit
    const newErrors = {
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      employees: validateField('employees', formData.employees),
      state: validateField('state', formData.state)
    };
    
    setErrors(newErrors);
    // Mark all fields as touched on submit
    setTouched({
      email: true,
      phone: true,
      employees: true,
      state: true
    });

    if (Object.values(newErrors).every(error => !error)) {
      console.log('Form submitted:', formData);
      // Handle successful form submission
    }
  };

  return (
    <FormContainer>
      <Title>See HROne Live.
      Schedule demo now.</Title>
      
      <form onSubmit={handleSubmit} noValidate>
        <FormGroup>
          <Input
            type="email"
            name="email"
            placeholder=" "
            value={formData.email}
            onChange={handleChange}
            hasError={touched.email && !!errors.email}
          />
          <Label isFloating={!!formData.email}>Work Email<RequiredAsterisk>*</RequiredAsterisk></Label>
          {touched.email && errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <PhoneInputWrapper hasError={touched.phone && !!errors.phone}>
            <CountryCode defaultValue="+91">
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+86">+86</option>
              <option value="+81">+81</option>
              <option value="+61">+61</option>
            </CountryCode>
            <PhoneInput
              type="tel"
              name="phone"
              placeholder=" "
              value={formData.phone}
              onChange={handleChange}
            />
            <PhoneLabel isFloating={!!formData.phone}>Phone number<RequiredStar>*</RequiredStar></PhoneLabel>
          </PhoneInputWrapper>
          {touched.phone && errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
        </FormGroup>

        <SelectFieldsContainer>
          <FormGroup>
            <SelectWrapper>
              <CustomSelect>
                <StyledSelect
                  name="employees"
                  value={formData.employees}
                  onChange={handleChange}
                  hasError={touched.employees && !!errors.employees}
                  hasValue={!!formData.employees}
                >
                  <option value=""></option>
                  <option value="1-50">1-50</option>
                  <option value="51-200">51-200</option>
                  <option value="201-500">201-500</option>
                  <option value="501+">501+</option>
                </StyledSelect>
                <PlaceholderText isVisible={!formData.employees}>
                  No. of Employees<RedAsterisk>*</RedAsterisk>
                </PlaceholderText>
              </CustomSelect>
              <SelectLabel isFloating={!!formData.employees && !errors.employees}>No. of Employees<RequiredStar>*</RequiredStar></SelectLabel>
              <ErrorLine show={touched.employees && !!errors.employees} />
              {touched.employees && errors.employees && <ErrorMessage>{errors.employees}</ErrorMessage>}
            </SelectWrapper>
          </FormGroup>

          <FormGroup>
            <SelectWrapper>
              <CustomSelect>
                <StyledSelect
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  hasError={touched.state && !!errors.state}
                  hasValue={!!formData.state}
                >
                  <option value=""></option>
                  <option value="delhi">Delhi</option>
                  <option value="maharashtra">Maharashtra</option>
                  <option value="karnataka">Karnataka</option>
                </StyledSelect>
                <PlaceholderText isVisible={!formData.state}>
                  State<RedAsterisk>*</RedAsterisk>
                </PlaceholderText>
              </CustomSelect>
              <SelectLabel isFloating={!!formData.state && !errors.state}>State<RequiredStar>*</RequiredStar></SelectLabel>
              <ErrorLine show={touched.state && !!errors.state} />
              {touched.state && errors.state && <ErrorMessage>{errors.state}</ErrorMessage>}
            </SelectWrapper>
          </FormGroup>
        </SelectFieldsContainer>

        <Button type="submit">
          <img src={GetStartedArrow} alt="Get Started Arrow" />
          <StyledSpan>Get Started</StyledSpan>
        </Button>
      </form>

      <BrandsSection>
        <BrandsTitle>Trusted by 2,000+ Brands</BrandsTitle>
        <BrandsGrid>
          <SliderContainer>
            <BrandLogo src={AmarSlider} alt="Amar Ujala" loading="lazy" />
            <BrandLogo src={Bikanervala} alt="Bikanervala" loading="lazy" />
            <BrandLogo src={abp} alt="ABP News" loading="lazy" />
            <BrandLogo src={flipkart} alt="Flipkart" loading="lazy" />
            {/* Duplicate set for continuous loop */}
            <BrandLogo src={AmarSlider} alt="Amar Ujala" loading="lazy" />
            <BrandLogo src={Bikanervala} alt="Bikanervala" loading="lazy" />
            <BrandLogo src={abp} alt="ABP News" loading="lazy" />
            <BrandLogo src={flipkart} alt="Flipkart" loading="lazy" />
          </SliderContainer>
          <ReverseSliderContainer>
            <BrandLogo src={Canon} alt="Canon" loading="lazy" />
            <BrandLogo src={magicpin} alt="Magicpin" loading="lazy" />
            <BrandLogo src={CarrerLaunchers} alt="Career Launcher" loading="lazy" />
            {/* Duplicate set for continuous loop */}
            <BrandLogo src={Canon} alt="Canon" loading="lazy" />
            <BrandLogo src={magicpin} alt="Magicpin" loading="lazy" />
            <BrandLogo src={CarrerLaunchers} alt="Career Launcher" loading="lazy" />
          </ReverseSliderContainer>
        </BrandsGrid>
      </BrandsSection>
    </FormContainer>
  );
};

export default DemoRequestForm; 