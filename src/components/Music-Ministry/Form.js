import React from "react";
import { 
  FormInput, 
  FormLabel, 
  FormSpan, 
  FormText, 
  FormWrapper, 
  SiteForm, 
  FormSubmitButton, 
  ButtonWrapper } from "../../styles/FormStyles";

export const Form = () => {
  return( 
      <FormWrapper
        R="2/3"
        C="6/10"
        TC="2/10"
        MC="2/6"
        JS="center"
        AS="start"
      >
      <SiteForm name="music" method="post" data-netlify="true" autoComplete="on" data-netlify-honeypot="bot-field" className="full_width_display">
        <FormInput type="hidden" name="form-name" value="music"/>
        <FormSpan className="full-Width">
          <FormLabel>
            Full Name*
              <FormInput 
              placeholder="Your name.." 
              type="text" 
              name="firstname" 
              required/>
          </FormLabel>
        </FormSpan>
        <FormSpan className="full-Width">
          <FormLabel>
              Phone Number
              <FormInput 
              placeholder="(111)333-5555" 
              required 
              type="tel"
              name="telephone"
              maxLength="14"
              inputMode="numeric"
              autoComplete="on"
              />
          </FormLabel>
        </FormSpan>
        <FormSpan className="full-Width">
          <FormLabel>
              Email*
              <FormInput 
                placeholder="Your email"
                autoComplete="on"
                name="Email:"
                />
          </FormLabel>
        </FormSpan>

        <FormSpan
          className="full-Width"
        >
          <FormLabel>
            Tell us more about yourself & your group interest
            <FormText
              placeholder="Type here.."
              autoComplete="off"
              autoCorrect="on"
              autoCapitalize="word"
              type="text"
              name="message"
            />
          </FormLabel>
        </FormSpan>
        
        <ButtonWrapper>
          <FormSubmitButton type="submit">Submit</FormSubmitButton>
        </ButtonWrapper>
      </SiteForm>
      </FormWrapper>
  )
}