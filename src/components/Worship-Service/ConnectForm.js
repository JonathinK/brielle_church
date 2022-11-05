import React from "react";
import { SubTitle } from "../../styles";

import { 
  FormInput, 
  FormLabel, 
  FormSpan, 
  FormText, 
  FormWrapper, 
  SiteForm, 
  FormSubmitButton, 
  ButtonWrapper } from "../../styles/FormStyles";

export const ConnectionCard = () => {
  return( 
      <FormWrapper
        R="2/4"
        C="5/11"
        TC="2/10"
        MC="2/6"
        JS="center"
        AS="start"
      >
      <SiteForm name="connection" method="post" data-netlify="true" autoComplete="on" data-netlify-honeypot="bot-field">
        <FormInput type="hidden" name="form-name" value="connection"/>
        <FormSpan>
          <FormLabel>
            First Name
              <FormInput 
              placeholder="Your name.." 
              type="text" 
              name="firstname" 
              required/>
          </FormLabel>
        </FormSpan>
        <FormSpan>
          <FormLabel>
            Last Name* 
            <FormInput 
            placeholder="Your last name.." 
            type="text" 
            name="lastname" 
            required
            />
          </FormLabel>
        </FormSpan>
        <FormSpan>
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
        <FormSpan>
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
            Tell us more about yourself
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
        <div required>
          <SubTitle>How did you hear of us?</SubTitle>  
            <FormLabel RadioWrapper>
              <FormInput type="radio" name="How did you hear of us?" value="Family / Friends"/>
              Family / Friends
            </FormLabel>
            <FormLabel RadioWrapper>
              <FormInput  type="radio" name="How did you hear of us?" value="Social Media"/>
              Social Media
            </FormLabel>
            <FormLabel RadioWrapper>
              <FormInput  type="radio" name="How did you hear of us?" value="Online"/>
              Online
            </FormLabel>
            <FormLabel RadioWrapper>
              <FormInput type="radio" name="How did you hear of us?" value="Driving by"/>
              Driving By
            </FormLabel>
            <FormLabel RadioWrapper>
              <FormInput type="radio" name="How did you hear of us?" value="Other"/>
              Other
            </FormLabel>
        </div> 
        <ButtonWrapper>
          <FormSubmitButton type="submit">Submit Card</FormSubmitButton>
        </ButtonWrapper>
      </SiteForm>
      </FormWrapper>
  )
}