"use client";
import {
  Button,
  Container,
  Divider,
  Group,
  Pagination,
  Rating,
  Text,
  Textarea,
  Title,
} from "@mantine/core";
import { useState } from "react";

export default function FoodReviewPage() {
  const [value, setValue] = useState(0);
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      {/*  */}

      <Title order={4} mt="sm">
        Your rating
      </Title>
      <Rating value={value} onChange={setValue} size="lg" />
      {/*  */}
      <Textarea
        mt="xs"
        placeholder="Do you enjoy eating?"
        label="Your review"
        minRows={3}
      />
      <Button color="orange" mt="xs">
        Submit Review{" "}
      </Button>
      {/*  */}
      <Divider my="sm" />
      <Group position="center">
        <Title order={4}>Elon Musk</Title>
        <Rating value={5} readOnly></Rating>
      </Group>
      <Text align="center" c="dimmed">
        Best pizza in this world. I give you X score.{" "}
      </Text>
      {/*  */}
      <Divider my="sm" />
      <Group position="center">
        <Title order={4}>Mark Zuck</Title>
        <Rating value={4} readOnly></Rating>
      </Group>
      <Text align="center" c="dimmed">
        My favourite part is pepperoni
      </Text>
      {/*  */}

      <Pagination
        position="center"
        color="orange"
        total={20}
        siblings={1}
        defaultValue={1}
        mt="md"
      />
      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Kanonlas Rattanapak 650610743
      </Text>
    </Container>
  );
}
