import SkeletonLoader from 'expo-skeleton-loader';
import React from 'react';
import { useTheme } from 'styled-components/native';

export function CardLargeEventSkeleton() {
  const theme = useTheme();

  return (
    <SkeletonLoader>
      <SkeletonLoader.Container
        style={{
          width: 300,
          height: 150,
          borderRadius: 10,
          justifyContent: 'space-between',
          backgroundColor: theme.colors.background_secondary,
          padding: 14,
        }}
      >
        <SkeletonLoader.Container
          style={{
            width: 286,
            height: 30,
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            backgroundColor: theme.colors.background_secondary,
            padding: 14,
          }}
        >
          <SkeletonLoader.Item style={{ width: 30, height: 30, borderRadius: 15 }} />
          <SkeletonLoader.Item
            style={{ width: 30, height: 30, borderRadius: 15, marginLeft: -10 }}
          />
          <SkeletonLoader.Item
            style={{ width: 30, height: 30, borderRadius: 15, marginLeft: -10 }}
          />
        </SkeletonLoader.Container>
        <SkeletonLoader.Container>
          <SkeletonLoader.Item
            style={{ width: 120, height: 14, marginBottom: 5, borderRadius: 2 }}
          />
          <SkeletonLoader.Item
            style={{ width: 170, height: 14, marginBottom: 5, borderRadius: 2 }}
          />
          <SkeletonLoader.Item style={{ width: 80, height: 14, borderRadius: 2 }} />
        </SkeletonLoader.Container>
      </SkeletonLoader.Container>
    </SkeletonLoader>
  );
}
