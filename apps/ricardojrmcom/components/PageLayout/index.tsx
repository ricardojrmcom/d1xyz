import { Box } from '@mui/material';
import { Layout, Header, Footer } from '@d2xyz/ui';
import { APP } from '../../cfg/app';
import { Logo } from '../Logo';
import { Nav } from '../Nav';

export interface PageLayoutProps {
  children?: React.ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <Layout
      header={
        <Header home={<Logo />}>
          <Nav />
        </Header>
      }
      footer={
        <Footer
          copyrightMsg={APP.copyright}
          socials={{
            brandName: APP.brandName,
            github: true,
            linkedin: true,
          }}
        />
      }
    >
      <Box sx={{ paddingTop: '90px', paddingBottom: '180px' }}>{children}</Box>
    </Layout>
  );
};
