<a href="https://github.com/Consensas/information-passport/tree/main/docs"><img src="https://consensas-aws.s3.amazonaws.com/icons/passports-github.png" align="right" /></a>

# Information Passport

## Introduction
### What is an Information Passport?
An **[Information Passport](https://github.com/Consensas/information-passport/tree/main/docs#information-passport)** 
is a _signed digital document_ that makes some claim,
for example "So and so was Vaccinated against COVID-19 on a certain date".
If the _signature_ matches the _public key_ of the digital document, the
document is **Verified**.
If the **Claim** made in the document checks against a set of (use-defined) rules
_and_ the "fingerprint" of the public key is known, we say the document is
**Validated**.

A **Vaccination Passport** is an Information Passport that 
provides digital proof of a Vaccination.
A **Test Passport** is an Information Passport that provides
digital proof a some test having been performed.

### Social Media

* We write on [Medium](https://dpjanes.medium.com/)
  for higher social media visibilty
* [@dpjanes](https://twitter.com/dpjanes)
* [@consensas](https://twitter.com/consensas)

## Design Goals

* It is easy for humans to read and write. 
* It is easy for machines to parse and generate. These two points should be familiar, 
  they are the design ideals of [JSON](https://www.json.org/json-en.html).
* Open Source Implementation - our inspiration is the early web, where any reasonably
  skilled technologist could pick up it up and do something useful.
  Our open source reference implementation is on GitHub
  at [information-passport](https://github.com/Consensas/information-passport)
  and a reference sample website is at 
  [information-passport-website](https://github.com/Consensas/information-passport-website).
* Non-creepy - minimize the potential for personal information leakage and 
  the need for data centralization
* Secure - obviously
* Revokable - e.g. in the case of security breaches or fraudulently issued credentials
* Renounceable - e.g. having a URL to a passport won't guarantee it will
  verify or validate in the future
* Localized / Internationalized - passports need to work across multiple
  cultures and languages
* Semantic - data should [Linked Data](https://en.wikipedia.org/wiki/Linked_data) 
  friendly. In particular, [Schema](https://schema.org) should
  be the jumping off point for data definitions
* Standards Based - standing on the shoulders of giants, etc. etc. 
* Minimalistic - define the least to do the job, and no more: for example,
  we do not define whether the mobile phone number of a Passport holder needs
  to be recorded
* Open Ended - if you need a Passport system that requires e.g. a mobile phone number,
  it should be straight-forward to build on this standard
* Paper Friendly - an Information Passport should work as well by presenting
  a piece of paper as by doing something "digital"
* Non-app - it should not require an app to be installed on a smart phone. 
  As per above, it should not even require a smart phone! 
  However, if there are app-based passport solutions / "wallets"
  (there are several underway) this standard will likely provide an excellent
  data source.
* ID Entry friendly - ideally, it would be simple to enter some sort of Passport identifier 
  into a website, like you do with e.g. a Credit Card.

## Reference Website

The reference website is live at
[passport.consensas.com](https://passport.consensas.com)
and the source is on [GitHub](https://github.com/Consensas/information-passport-website).

It contains:

* a web-based validator, which can scan QR codes
* 2500 sample vaccination records
* Apache 2.4 configuration
* NGINX configuration

You can install this website on your own computer to play with it
_and_ all the code needed to create it (including sample data)
available here - see the next section.

## Code

The Node.JS code and package documentation is [here](Code.md).

## Tools

### Command Line Signing and Verification

Command Line tools for signing and verification,
including bulk generation of records,
can be found in [tools/bin](../tools/bin). 
Please see the documentation there for more.

### Web Based Verification

A web-based verifier, including QR code scanners,
can be found in [web](../web). 
Please see the documentation there for more.

### Hand-held Scanner Verfication

A hand-held scanner verifier - for Raspberry Pi, 
but likely easily adaptable to any platform - 
can be found in [tools/bin](../tools/bin). 
Please see the documentation there for more.

Video:

<div align="left">
      <a href="https://www.youtube.com/watch?v=d3oz7kR6ZjU" target="video">
         <img src="https://img.youtube.com/vi/d3oz7kR6ZjU/0.jpg" style="width: 200px">
      </a>
</div>

## Specifications

### Information Passports

[Information Passports - Technical Description](Technical.md) is the
core specification. 
It describes our design goals, as well as the technologies that
fit together to create Information Passports.

The following support specifications are referenced:

* [Vaccination Passport encoded as a W3C Verifiable Credential](VerifiableCredential.md)
* [ConsensasRSA2021 signing standard](Signing.md)
* [QName Compacted JSON-LD](QCompacted.md)

### Schema for Health Passports

These are the core semantic models for Vaccination and Test Passports.
Note that the general concept of Information Passports do not depend
in any way on these models.

The primary model for verifying a Vaccination is the 
[Vaccination-Record](Vaccination-Record.md); in the future 
we will have Test-Record (name TDB). 

Here are all the models:

* [A schema.org extension for describing a Vaccination Record](Vaccination-Record.md)
* [A schema.org description of a Patient](Patient.md)
* [A schema.org description of a Hospital](Hospital.md)
* [A schema.org extension for describing a Health Card](Permit-HealthCard.md)
* [A schema.org extension for describing Vaccinations](Vaccination.md) 
* [A schema.org description of a Drug like Moderna](Drug-Moderna.md) 
* [A schema.org description of a Health Condition like COVID-19](HealthCondition-COVID.md) 
