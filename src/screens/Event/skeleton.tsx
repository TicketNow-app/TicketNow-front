import SkeletonLoader from 'expo-skeleton-loader';
import React from 'react';
import { useTheme } from 'styled-components/native';

export function EventSkeleton() {
  const theme = useTheme();

  return (
    <SkeletonLoader>
      <SkeletonLoader.Container
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'flex-end',
          backgroundColor: theme.colors.background_secondary,
        }}
      >
        <SkeletonLoader.Container
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 14,
          }}
        >
          <SkeletonLoader.Container style={{ flexDirection: 'row', alignItems: 'center' }}>
            <SkeletonLoader.Item
              style={{ width: 30, height: 30, borderRadius: 15, marginRight: 8 }}
            />
            <SkeletonLoader.Item style={{ width: 110, height: 24, borderRadius: 2 }} />
          </SkeletonLoader.Container>
          <SkeletonLoader.Container style={{ flexDirection: 'row' }}>
            <SkeletonLoader.Item style={{ width: 30, height: 30, borderRadius: 15 }} />
            <SkeletonLoader.Item
              style={{ width: 30, height: 30, borderRadius: 15, marginLeft: -10 }}
            />
            <SkeletonLoader.Item
              style={{ width: 30, height: 30, borderRadius: 15, marginLeft: -10 }}
            />
          </SkeletonLoader.Container>
        </SkeletonLoader.Container>

        <SkeletonLoader.Container
          style={{
            width: '100%',
            height: '40%',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: theme.colors.background,
            paddingHorizontal: 16,
            paddingVertical: 55,
          }}
        >
          <SkeletonLoader.Container style={{ marginBottom: 40 }}>
            <SkeletonLoader.Item
              style={{ width: 160, height: 24, borderRadius: 2, marginBottom: 16 }}
            />
            <SkeletonLoader.Item style={{ width: 230, height: 24, borderRadius: 2 }} />
          </SkeletonLoader.Container>
          <SkeletonLoader.Container style={{ width: '100%' }}>
            <SkeletonLoader.Item
              style={{ width: 100, height: 24, borderRadius: 2, marginBottom: 14 }}
            />
            <SkeletonLoader.Item style={{ width: 354, height: 160, borderRadius: 2 }} />
          </SkeletonLoader.Container>
        </SkeletonLoader.Container>
      </SkeletonLoader.Container>
    </SkeletonLoader>
  );
}
