import React from 'react';
import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
    return (
        <Box 
            component="footer" 
            sx={{ 
                backgroundColor: '#414042', 
                py: 5, 
                width: '100%', 
                position: 'relative', 
                bottom: 0 
            }}
        >
            <Container 
                sx={{ 
                    display: 'flex', 
                    flexDirection: { xs: 'column', sm: 'row' }, 
                    justifyContent: 'space-between', 
                    alignItems: 'start', 
                    px: 0 
                }}
            >
                <Box>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        <li style={{ marginBottom: '16px' }}>
                            <Link href="#" color="white" underline="hover" sx={{ fontWeight: 'bold', fontSize: '18px', fontFamily: 'Roboto Mono, monospace' }}>VOLUNTEER</Link>
                        </li>
                        <li style={{ marginBottom: '16px' }}>
                            <Link href="#" color="white" underline="hover" sx={{ fontWeight: 'bold', fontSize: '18px', fontFamily: 'Roboto Mono, monospace' }}>PRIVACY POLICY</Link>
                        </li>
                        <li style={{ marginBottom: '16px' }}>
                            <Link href="#" color="white" underline="hover" sx={{ fontWeight: 'bold', fontSize: '18px', fontFamily: 'Roboto Mono, monospace' }}>TERMS OF USE</Link>
                        </li>
                    </ul>
                </Box>
                <Box sx={{ textAlign: { xs: 'center', sm: 'right' }, mt: { xs: 3, sm: 0 } }}>
                    <Typography variant="body2" fontWeight="bold" color="white" sx={{ fontFamily: 'Roboto Mono, monospace' }}>EMAIL: INFO@SUNNYHILLFESTIVAL.COM</Typography>
                    <Typography variant="body2" fontWeight="bold" color="white" sx={{ fontFamily: 'Roboto Mono, monospace' }}>REPUBLIKA.TV</Typography>
                    <Typography variant="body2" fontWeight="bold" color="white" sx={{ fontFamily: 'Roboto Mono, monospace' }}>SUNNY HILL FESTIVAL</Typography>
                    <Typography variant="body2" fontWeight="bold" color="white" sx={{ fontFamily: 'Roboto Mono, monospace' }}>ENVER MALOKU, NR. 82,</Typography>
                    <Typography variant="body2" fontWeight="bold" color="white" sx={{ fontFamily: 'Roboto Mono, monospace' }}>PRISHTINE 10000 KOSOVE</Typography>
                </Box>
            </Container>
            <Container sx={{ mt: 3, textAlign: 'center', px: 0 }}>
                <Box>
                    <IconButton href="#" color="inherit">
                        <FacebookIcon sx={{ color: 'white' }} />
                    </IconButton>
                    <IconButton href="#" color="inherit">
                        <InstagramIcon sx={{ color: 'white' }} />
                    </IconButton>
                    <IconButton href="#" color="inherit">
                        <TwitterIcon sx={{ color: 'white' }} />
                    </IconButton>
                    <IconButton href="#" color="inherit">
                        <YouTubeIcon sx={{ color: 'white' }} />
                    </IconButton>
                </Box>
                <Typography variant="caption" display="block" sx={{ mt: 2, opacity: 0.75, color: 'white', fontFamily: 'Roboto Mono, monospace' }}>
                    © ALL RIGHTS RESERVED CRAFTED BY: REPUBLIKA.TV
                </Typography>
            </Container>
        </Box>
    );
}

export default Footer;
