import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

// import TSILogo from '../../static/logos/airline.png'
import Airline from '../assets/logos/airline.png'
import Cort from '../assets/logos/cort.png'
import Danelectro from '../assets/logos/danelectro.png'
import Eastwood from '../assets/logos/eastwood.png'
import Epiphone from '../assets/logos/epiphone.png'
import ESP from '../assets/logos/esp.png'
import Fender from '../assets/logos/fender.png'
import GL from '../assets/logos/gl.png'
import Gibson from '../assets/logos/gibson.png'
import Goldtone from '../assets/logos/goldtone.png'
import Hofner from '../assets/logos/hofner.png'
import Ibanez from '../assets/logos/ibanez.png'
import Marcusmiller from '../assets/logos/marcusmiller.png'
import Musicman from '../assets/logos/musicman.png'
import Rickenbacker from '../assets/logos/rickenbacker.png'
import Sadowsky from '../assets/logos/sadowsky.png'
import Sandberg from '../assets/logos/sandberg.png'
import Schecter from '../assets/logos/schecter.png'
import Sire from '../assets/logos/sire.png'
import Steinberger from '../assets/logos/steinberger.png'
import Vintage from '../assets/logos/vintage.png'
import Warwick from '../assets/logos/warwick.png'

const Column = styled.div`
    display: flex;
    flex-direction: column;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2rem;
`

const BrandBox = styled.div`
    width: 200px;
    text-align: center;
    align-items: center;
`

const Logo = styled.img`
    width: auto;
    height: 80px;
    margin-top: -0.5rem;
`

const Brand = styled.div`
    height: 100px;
    width: 200px;
    background-color: #f8f8ff;
    border: 2px solid black;
    border-radius: 10px;
    padding: 1rem;
    margin-bottom: 1rem;
`

const BrandName = styled(Link)`
    color: hotpink;
`

const Bass = () => (
    <IndexLayout>
        <Page>
            <Container>
                <h1>Please select a brand:</h1>
                <Column>
                    <Row>
                        <BrandBox>
                            <Link to="/bass/airline">
                                <Brand>
                                    <Logo src={Airline} alt="Airline" />
                                </Brand>
                            </Link>
                            <BrandName to="/bass/airline">Airline</BrandName>
                        </BrandBox>
                        <BrandBox>
                            <Link to="/bass/cort">
                                <Brand>
                                    <Logo src={Cort} alt="Cort" />
                                </Brand>
                            </Link>
                            <BrandName to="/bass/cort">Cort</BrandName>
                        </BrandBox>
                        <BrandBox>
                            <Link to="/bass/danelectro">
                                <Brand>
                                    <Logo src={Danelectro} alt="Danelectro" />
                                </Brand>
                            </Link>
                            <BrandName to="/bass/danelectro">Danelectro</BrandName>
                        </BrandBox>
                        <BrandBox>
                            <Link to="/bass/eastwood">
                                <Brand>
                                    <Logo src={Eastwood} alt="Eastwood" />
                                </Brand>
                            </Link>
                            <BrandName to="/bass/eastwood">Eastwood</BrandName>
                        </BrandBox>
                    </Row>
                    <Row>
                        <BrandBox>
                            <Link to="/bass/epiphone">
                                <Brand>
                                    <Logo src={Epiphone} alt="Epiphone" />
                                </Brand>
                            </Link>
                            <BrandName to="/bass/epiphone">Epiphone</BrandName>
                        </BrandBox>
                        <BrandBox>
                            <Link to="/bass/esp">
                                <Brand>
                                    <Logo src={ESP} alt="ESP" />
                                </Brand>
                            </Link>
                            <BrandName to="/bass/esp">ESP</BrandName>
                        </BrandBox>
                        <BrandBox>
                            <Link to="/bass/fender">
                                <Brand>
                                    <Logo src={Fender} alt="Fender" />
                                </Brand>
                            </Link>
                            <BrandName to="/bass/fender">Fender</BrandName>
                        </BrandBox>
                        <BrandBox>
                            <Link to="/bass/gl">
                                <Brand>
                                    <Logo src={GL} alt="G&L" />
                                </Brand>
                            </Link>
                            <BrandName to="/bass/gl">G&L</BrandName>
                        </BrandBox>
                    </Row>
                    <Row>
                        <BrandBox>
                            <Link to="/bass/gibson">
                                <Brand>
                                    <Logo src={Gibson} alt="Gibson" />
                                </Brand>
                            </Link>
                            <BrandName to="/bass/gibson">Gibson</BrandName>
                        </BrandBox>
                        <BrandBox>
                            <Link to="/bass/goldtone">
                                <Brand>
                                    <Logo src={Goldtone} alt="Gold Tone" />
                                </Brand>
                            </Link>
                            <BrandName to="/bass/goldtone">Gold Tone</BrandName>
                        </BrandBox>
                        <BrandBox>
                            <Link to="/bass/hofner">
                                <Brand>
                                    <Logo src={Hofner} alt="Höfner" />
                                </Brand>
                            </Link>
                            <BrandName to="/bass/hofner">Höfner</BrandName>
                        </BrandBox>
                        <BrandBox>
                            <Link to="/bass/ibanez">
                                <Brand>
                                    <Logo src={Ibanez} alt="Ibanez" />
                                </Brand>
                            </Link>
                            <BrandName to="/bass/ibanez">Ibanez</BrandName>
                        </BrandBox>
                    </Row>
                    <Row>
                        <BrandBox>
                            <Link to="/bass/marcusmiller">
                                <Brand>
                                    <Logo src={Marcusmiller} alt="Marcus Miller" />
                                </Brand>
                            </Link>
                            <BrandName to="/bass/marcusmiller">Marcus Miller</BrandName>
                        </BrandBox>
                        <BrandBox>
                            <Link to="/bass/musicman">
                                <Brand>
                                    <Logo src={Musicman} alt="Music Man" />
                                </Brand>
                            </Link>
                            <BrandName to="/bass/musicman">Music Man</BrandName>
                        </BrandBox>
                        <BrandBox>
                            <Link to="/bass/rickenbacker">
                                <Brand>
                                    <Logo src={Rickenbacker} alt="Rickenbacker" />
                                </Brand>
                            </Link>
                            <BrandName to="/bass/rickenbacker">Rickenbacker</BrandName>
                        </BrandBox>
                        <BrandBox>
                            <Link to="/bass/sadowsky">
                                <Brand>
                                    <Logo src={Sadowsky} alt="Sadowsky" />
                                </Brand>
                            </Link>
                            <BrandName to="/bass/sadowsky">Sadowsky</BrandName>
                        </BrandBox>
                    </Row>
                    <Row>
                        <BrandBox>
                            <Link to="/bass/sandberg">
                                <Brand>
                                    <Logo src={Sandberg} alt="Sandberg" />
                                </Brand>
                            </Link>
                            <BrandName to="/bass/sandberg">Sandberg</BrandName>
                        </BrandBox>
                        <BrandBox>
                            <Link to="/bass/schecter">
                                <Brand>
                                    <Logo src={Schecter} alt="Schecter" />
                                </Brand>
                            </Link>
                            <BrandName to="/bass/schecter">Schecter</BrandName>
                        </BrandBox>
                        <BrandBox>
                            <Link to="/bass/sire">
                                <Brand>
                                    <Logo src={Sire} alt="Sire" />
                                </Brand>
                            </Link>
                            <BrandName to="/bass/sire">Sire</BrandName>
                        </BrandBox>
                        <BrandBox>
                            <Link to="/bass/steinberger">
                                <Brand>
                                    <Logo src={Steinberger} alt="Steinberger" />
                                </Brand>
                            </Link>
                            <BrandName to="/bass/steinberger">Steinberger</BrandName>
                        </BrandBox>
                    </Row>
                    <Row>
                        <BrandBox>
                            <Link to="/bass/vintage">
                                <Brand>
                                    <Logo src={Vintage} alt="Vintage" />
                                </Brand>
                            </Link>
                            <BrandName to="/bass/vintage">Vintage</BrandName>
                        </BrandBox>
                        <BrandBox>
                            <Link to="/bass/warwick">
                                <Brand>
                                    <Logo src={Warwick} alt="Warwick" />
                                </Brand>
                            </Link>
                            <BrandName to="/bass/warwick">Warwick</BrandName>
                        </BrandBox>
                    </Row>
                </Column>
            </Container>
        </Page>
    </IndexLayout>
)

export default Bass
